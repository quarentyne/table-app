import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/helpers/inputPatterns";
import { FormButtons } from "../../../../shared/components/formButtons/FormButtons";
import { AddForm, FormInput, FormLabel, FormSelect } from "./styles";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { addCar } from "../../selectors";
import { useTypedSelector } from "../../../../shared/hooks/useTypedSelector";
import { carsClassesTitleSelector, carsStatusCodes } from "../../../../shared/helpers/carsClasses";

interface IAddCarForm{
  onFinish: () => void;
  targetId: number | null;
};

export const AddCarForm = ({ onFinish, targetId }: IAddCarForm) => {
  const drivers = useTypedSelector(state => state.drivers.data)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [carOptions, setCarOptions] = useState({
    mark: "",
    model: "",
    number: "",
    year: "",
    class: carsStatusCodes.STANDART,
    driver: String(drivers[0]?.id),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setCarOptions({ ...carOptions, [e.target.name]: e.target.value })
  };

  const createCar = (): void => {
    const title = carsClassesTitleSelector(carOptions.class);

    const newCar = JSON.stringify({
      model: carOptions.model,
      mark: carOptions.mark,
      number: carOptions.number,
      year: Number(carOptions.year),
      driver_id: carOptions.driver,
      status: {
        code: carOptions.class,
        title,
      },
    });    
    dispatch(addCar(newCar, targetId));
    cancelHandler();
  };

  const cancelHandler = (): void => {
    setCarOptions({
      mark: "",
      model: "",
      number: "",
      year: "",
      class: carsStatusCodes.STANDART,
      driver: String(drivers[0]?.id),
    });
    onFinish();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCar();
  };

  const markPlaceholder = t("addCar.mark");
  const modelPlaceholder = t("addCar.model");
  const numberPlaceholder = t("addCar.number");
  const yearPlaceholder = t("addCar.year");

  return (
    <AddForm onSubmit={submitForm}>
      <FormLabel htmlFor="driver">{t("addCar.driver")}</FormLabel>
      <FormSelect
        id="driver"
        name="driver"
        value={carOptions.driver}
        onChange={handleChange}>
        {drivers.map(driver => {
          if (!driver) {
            return <option value="" disabled>Drivers not found</option>
          };
          return <option key={driver.id} value={driver.id}>{`${driver.first_name} ${driver.last_name}`}</option>
        })}
      </FormSelect>
      <FormInput
        name="mark"
        pattern={namePattern}
        required
        type='text'
        placeholder={markPlaceholder}
        value={carOptions.mark}
        onChange={handleChange} />
      <FormInput
        name="model"
        pattern={modelPattern}
        required type='text'
        placeholder={modelPlaceholder}
        value={carOptions.model}
        onChange={handleChange} />
      <FormInput
        name="number"
        pattern={numberPattern}
        required
        type='text'
        placeholder={numberPlaceholder}
        value={carOptions.number}
        onChange={handleChange} />
      <FormInput
        name="year"
        pattern={yearPattern}
        required
        type='text'
        placeholder={yearPlaceholder}
        value={carOptions.year}
        onChange={handleChange} />
      <FormLabel htmlFor="select">{t("addCar.status")}</FormLabel>
      <FormSelect
        name="class"
        id="select"
        value={carOptions.class}
        onChange={handleChange}>
        <CarsStatuses />
      </FormSelect>
      <FormButtons onCancel={cancelHandler} />
    </AddForm>
  );
};