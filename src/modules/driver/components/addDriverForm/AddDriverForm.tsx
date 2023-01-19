import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addDriver } from "../../actions";
import { datePattern, namePattern } from "../../../../shared/helpers/inputPatterns";
import { FormButtons } from "../../../../shared/components/FormButtons/FormButtons";
import { AddForm, FormInput, FormLabel, FormSelect } from "./styles";
import { driverStatusCodes,  driverStatusTitleSelector, mappedDriverStatusCodes } from "../../../../shared/helpers/driversStatuses";

interface IAddDriverForm{
  onFinish: () => void;
};

export const AddDriverForm = ({ onFinish }: IAddDriverForm) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [driverOptions, setDriverOptions] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    status: driverStatusCodes.ACTIVE,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setDriverOptions({ ...driverOptions, [e.target.name]: e.target.value });    
  };

  const createDriver = (): void => {
    const title = driverStatusTitleSelector(driverOptions.status);
    const date = driverOptions.birthDate.split('.');
    const refactoredDate = `${date[1]}.${date[0]}.${date[2]}`;

    dispatch(addDriver(JSON.stringify({
      first_name: driverOptions.firstName,
      last_name: driverOptions.lastName,
      date_birth: Date.parse(refactoredDate),
      status: {
        code: driverOptions.status,
        title,
      },
    })));
    cancelHandler();
  };

  const cancelHandler = (): void => {
    setDriverOptions({
      firstName: "",
      lastName: "",
      birthDate: "",
      status: driverStatusCodes.ACTIVE,
    });
    onFinish();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    createDriver();
  };

  const firstNamePlaceholder = t("addDriver.firstName");
  const secondNameNamePlaceholder = t("addDriver.lastName");
  const birthPlaceholder = t("addDriver.birth");

  return (
    <AddForm onSubmit={submitForm}>
      <FormInput
        pattern={namePattern}
        name="firstName"
        required
        type='text'
        placeholder={firstNamePlaceholder}
        value={driverOptions.firstName}
        onChange={handleChange} />
      <FormInput
        pattern={namePattern}
        name="lastName"
        required type='text'
        placeholder={secondNameNamePlaceholder}
        value={driverOptions.lastName}
        onChange={handleChange} />
      <FormInput
        pattern={datePattern}
        name="birthDate"
        required
        type='text'
        placeholder={birthPlaceholder}
        value={driverOptions.birthDate}
        onChange={handleChange} />
      <FormLabel htmlFor="select">{t("addDriver.status")}</FormLabel>
      <FormSelect
        id="select"
        name="status"
        value={driverOptions.status}
        onChange={handleChange}
      >
        {mappedDriverStatusCodes.map((status, i) => <option key={i} value={status}>{t(`driver.statuses.${status}`)}</option>)}
      </FormSelect>
      <FormButtons onCancel={cancelHandler} />
    </AddForm>
  );
};