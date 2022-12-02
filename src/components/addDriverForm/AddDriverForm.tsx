import { IAddDriver, ILanguage, ILanguageDriver } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AddDriverForm.module.scss";
import { useState } from "react";
import { DRIVER_STATUSES } from "../../constants/statuses";
import { FormButtons } from "../formButtons/FormButtons";
import { useDispatch } from "react-redux";
import { addDriver } from "../../sagas/actions";
import { datePattern, namePattern } from "../../constants/inputPatterns";

interface IAddDriverForm {
  onHandler: () => void;
};

export const AddDriverForm = ({onHandler}: IAddDriverForm) => {
  const language: ILanguage = useTypedSelector(lang => lang.language.language);
  const driverLang: ILanguageDriver = language.driver;
  const formLang: IAddDriver = language.addDriver;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [status, setStatus] = useState('active');
  const dispatch = useDispatch();
  
  const addHandler = (): void => {
    const newDriver = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      date_birth: Date.parse(birthDate),
      status: {
        code: status,
        title: DRIVER_STATUSES[status],
      },
    });
    cancelHandler();
    dispatch(addDriver(newDriver));
  };

  const cancelHandler = (): void => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
  };

  return (
    <form className={classes.add_driver_form} onSubmit={(e) => {
      e.preventDefault();
      onHandler();
      addHandler();
    }}>
      <input pattern={namePattern} required type='text' placeholder={formLang.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input pattern={namePattern} required type='text' placeholder={formLang.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input pattern={datePattern} required type='text' placeholder={formLang.birth} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <label htmlFor="select">{formLang.status}</label>
      <select id="select" defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
        <option value='active'>{driverLang.statuses.active}</option>
        <option value='blocked'>{driverLang.statuses.blocked}</option>
        <option value='fired'>{driverLang.statuses.fired}</option>
        <option value='not_active'>{driverLang.statuses.not_active}</option>
      </select>
      <FormButtons onCancel={() => {
          onHandler();
          cancelHandler();
        }}/>
    </form>
  );
};