import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addDriver } from "../../selectors";
import { DRIVER_STATUSES } from "../../../../shared/constants/driverStatuses";
import { datePattern, namePattern } from "../../../../shared/constants/regexp";
import { FormButtons } from "../../../../shared/components/formButtons/FormButtons";
import { AddForm, FormInput, FormLabel, FormSelect } from "./styles";

interface IAddDriverForm{
  onFinish: () => void;
};

export const AddDriverForm = ({onFinish}: IAddDriverForm) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [status, setStatus] = useState('active');
  const dispatch = useDispatch();

  const addHandler = (): void => {
    dispatch(addDriver(JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      date_birth: Date.parse(birthDate),
      status: {
        code: status,
        title: DRIVER_STATUSES[status],
      },
    })));
    cancelHandler();    
  };

  const cancelHandler = (): void => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    onFinish();
  };

  const firstNamePlaceholder = t("addDriver.firstName");
  const secondNameNamePlaceholder = t("addDriver.lastName");
  const birthPlaceholder = t("addDriver.birth");

  return (
    <AddForm onSubmit={e => {
      e.preventDefault();
      addHandler();
    }}>
      <FormInput
        pattern={namePattern}
        required
        type='text'
        placeholder={firstNamePlaceholder}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} />
      <FormInput
        pattern={namePattern}
        required type='text'
        placeholder={secondNameNamePlaceholder}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)} />
      <FormInput
        pattern={datePattern}
        required
        type='text'
        placeholder={birthPlaceholder}
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)} />
      <FormLabel htmlFor="select">{t("addDriver.status")}</FormLabel>
      <FormSelect id="select" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value='active'>{t("driver.statuses.active")}</option>
        <option value='blocked'>{t("driver.statuses.blocked")}</option>
        <option value='fired'>{t("driver.statuses.fired")}</option>
        <option value='not_active'>{t("driver.statuses.not_active")}</option>
      </FormSelect>
      <FormButtons onCancel={() => cancelHandler()} />
    </AddForm>
  );
}