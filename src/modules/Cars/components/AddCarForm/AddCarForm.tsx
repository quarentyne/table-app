import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/helpers/inputPatterns";
import { FormButtons } from "../../../../shared/components/FormButtons/FormButtons";
import { AddForm, FormInput, FormLabel, FormSelect } from "./styles";
import { carsClassesTitleSelector, carsStatusCodes, mappedCarsStatusCodes } from "../../../../shared/helpers/carsClasses";
import { IDriver } from "../../../Drivers/features/models";
import { addCar } from "../../features/actionCreators";

interface IAddCarForm{
  onFinish: () => void;
  driverId: number | null;
  drivers: IDriver[];
};

export const AddCarForm = ({ onFinish, driverId, drivers }: IAddCarForm) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [carOptions, setCarOptions] = useState({
    mark: "",
    model: "",
    number: "",
    year: "",
    class: carsStatusCodes.STANDARD,
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
    dispatch(addCar(newCar, driverId));
    cancelHandler();
  };

  const cancelHandler = (): void => {
    setCarOptions({
      mark: "",
      model: "",
      number: "",
      year: "",
      class: carsStatusCodes.STANDARD,
      driver: String(drivers[0]?.id),
    });
    onFinish();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCar();
  };

  const driversSelector = useMemo(() => drivers.map(driver => {
    if (!driver) {
      return <option value="" disabled>Drivers not found</option>
    };
    return <option key={driver.id} value={driver.id}>{`${driver.first_name} ${driver.last_name}`}</option>
  }), [drivers]);

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
        {driversSelector}
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
        {mappedCarsStatusCodes.map((status, i) => <option key={i} value={status}>{t(`car.statuses.${status}`)}</option>)}
      </FormSelect>
      <FormButtons onCancel={cancelHandler} />
    </AddForm>
  );
};