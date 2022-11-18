import { IAddDriver, ILanguage, ILanguageDriver } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AddDriverForm.module.scss";
import confirm from "../../assets/confirm.svg";
import cancel from "../../assets/delete.svg";
import { useState } from "react";
import { DRIVER_STATUSES } from "../../constants/statuses";

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
  
  const addHandler = (): void => {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      birthDate: Date.parse(birthDate),
      status: {
        code: status,
        title: DRIVER_STATUSES[status],
      },
    };
    cancelHandler();
    console.log(obj);    
  };

  const cancelHandler = (): void => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
  };

  const namePattern = '[a-zA-Z]{2,}';
  const datePattern = '^([0][1-2]|[1][0-2])\\.([0][1-2]|[1][0-2])\\.[1-2]\\d{3}$';

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
      <div className={classes.form_buttons}>
        <button type="submit">
          <img src={confirm} alt="Add" width={25} height={25} />
        </button>
        <button type="button" onClick={() => {
          onHandler();
          cancelHandler();
        }
        }>
          <img src={cancel} alt="Cancel" width={25} height={25} />
        </button>
      </div>
    </form>
  );
};