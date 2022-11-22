import { ReactElement, useState } from "react";
import { IAddDriver, ILanguage, ILanguageActions, ILanguageDriver } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import tableClasses from "../../scss/DriversTable.module.scss";
import { Actions } from "../actions/Actions";
import driverStatusClasses from "./DriverStatus.module.scss";
import classes from "../addDriverForm/AddDriverForm.module.scss";
import driverpageClasses from "../../pages/driver/Driverpage.module.scss";
import confirm from "../../assets/confirm.svg";
import cancel from "../../assets/delete.svg";
import { driverClassesByStatus } from "./DriverStatusClasses";

interface IDriver {
  driver: {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: {
      code: string;
      title: string;
    };
  };
};

export const Driver = ({ driver }: IDriver): ReactElement => {
  const birthDate: Date = new Date(driver.date_birth);
  const joinDate: Date = new Date(driver.date_created);


  const language: ILanguage = useTypedSelector(lang => lang.language.language);
  const driverLang: ILanguageDriver = language.driver;
  const formLang: IAddDriver = language.addDriver;
  const menuLang: ILanguageActions = language.actions;

  const renderDate = (date: Date): string => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const checker = (value: number): string => '0' + value;
    return ((day < 10 ? checker(day) : day) + '.' + (month < 10 ? checker(month) : month) + '.' + date.getFullYear());
  };

  const [isEditName, setIsEditName] = useState(false);
  const [isEditStatus, setIsEditStatus] = useState(false);
  const [firstName, setFirstName] = useState(driver.first_name);
  const [lastName, setLastName] = useState(driver.last_name);
  const [status, setStatus] = useState(driver.status.code);

  const cancelHandler = () => {
    setFirstName(driver.first_name);
    setLastName(driver.last_name);
    setStatus(driver.status.code);
    setIsEditName(false);
    setIsEditStatus(false);
  };


  return (
    <>
      <ul className={tableClasses.drivers_table + ' ' + tableClasses.drivers_table_element}>
        <li>{driver.id}</li>
        <li onClick={() => setIsEditName(true)}>{firstName} {lastName}</li>
        <li>{renderDate(birthDate)}</li>
        <li>{renderDate(joinDate)}</li>
        <li onClick={() => setIsEditStatus(true)}><span className={driverStatusClasses.preview + ' ' + driverClassesByStatus[status]}>{driverLang.statuses[status]}</span></li>
        <li><Actions eyeText={menuLang.autos} deleteText={menuLang.delete} /></li>
      </ul>
      <div className={driverpageClasses.wrapper} style={isEditName ? {display: 'block'} : {display: 'none'}}>
        <form className={classes.add_driver_form} onSubmit={(e) => {
          e.preventDefault();
          setIsEditName(false);
          console.log(firstName, lastName);          
        }}>
          <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <div className={classes.form_buttons}>
            <button type="submit">
              <img src={confirm} alt="Add" width={25} height={25} />
            </button>
            <button type="button" onClick={() => {
              cancelHandler();
            }
            }>
              <img src={cancel} alt="Cancel" width={25} height={25} />
            </button>
          </div>
        </form>
      </div>
      <div className={driverpageClasses.wrapper} style={isEditStatus ? {display: 'block'} : {display: 'none'}}>
        <form className={classes.add_driver_form} onSubmit={(e) => {
          e.preventDefault();
          setIsEditStatus(false);
          console.log(status);          
        }}>
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
              cancelHandler();
            }
            }>
              <img src={cancel} alt="Cancel" width={25} height={25} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};