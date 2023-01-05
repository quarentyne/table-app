import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/constants/inputPatterns";
import { FormButtons } from "../../../../shared/components/formButtons/FormButtons";
import { AddForm, FormInput, FormLabel, FormSelect } from "./styles";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { addCar } from "../../selectors";
import { useTypedSelector } from "../../../../shared/hooks/useTypedSelector";
import { carsClassesCodeSelector, carsClassesTitleSelector, carsStatusCodes } from "../../../../helpers/carsClasses";

interface IAddCarForm{
  onFinish: () => void;
};

export const AddCarForm = ({ onFinish }: IAddCarForm) => {
  const drivers = useTypedSelector(state => state.drivers.data)
  const { t } = useTranslation();
  const [mark, setMark] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [year, setYear] = useState('');
  const [carClass, setCarClass] = useState(carsStatusCodes.STANDART);
  const [owner, setOwner] = useState(String(drivers[0]?.id));
  const dispatch = useDispatch();

  const addHandler = (): void => {
    const title = carsClassesTitleSelector(carClass);

    const newCar = JSON.stringify({
      model,
      mark,
      number,
      year: Number(year),
      driver_id: owner,
      status: {
        code: carClass,
        title,
      },
    });    
    dispatch(addCar(newCar));
    cancelHandler();
  };

  const cancelHandler = (): void => {
    setMark('');
    setModel('');
    setNumber('');
    setYear('');
    onFinish();
  };

  const markPlaceholder = t("addCar.mark");
  const modelPlaceholder = t("addCar.model");
  const numberPlaceholder = t("addCar.number");
  const yearPlaceholder = t("addCar.year");

  return (
    <AddForm onSubmit={e => {
      e.preventDefault();
      addHandler();
    }}>
      <FormLabel htmlFor="owner">{t("addCar.owner")}</FormLabel>
      <FormSelect id="owner" value={owner} onChange={(e) => setOwner(e.target.value)}>
        {drivers.map(driver => {
          if (!driver) {
            return <option value="" disabled>Drivers not found</option>
          };
          return <option key={driver.id} value={driver.id}>{driver.first_name + ' ' + driver.last_name}</option>
        })}
      </FormSelect>
      <FormInput
        pattern={namePattern}
        required
        type='text'
        placeholder={markPlaceholder}
        value={mark}
        onChange={(e) => setMark(e.target.value)} />
      <FormInput
        pattern={modelPattern}
        required type='text'
        placeholder={modelPlaceholder}
        value={model}
        onChange={(e) => setModel(e.target.value)} />
      <FormInput
        pattern={numberPattern}
        required
        type='text'
        placeholder={numberPlaceholder}
        value={number}
        onChange={(e) => setNumber(e.target.value)} />
      <FormInput
        pattern={yearPattern}
        required
        type='text'
        placeholder={yearPlaceholder}
        value={year}
        onChange={(e) => setYear(e.target.value.toUpperCase())} />
      <FormLabel htmlFor="select">{t("addCar.status")}</FormLabel>
      <FormSelect id="select" value={carClass} onChange={(e) => setCarClass(carsClassesCodeSelector(e.target.value))}>
        <CarsStatuses />
      </FormSelect>
      <FormButtons onCancel={() => cancelHandler()} />
    </AddForm>
  );
};