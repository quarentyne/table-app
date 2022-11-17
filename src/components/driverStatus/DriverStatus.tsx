import { useState, ReactElement } from "react";
import { ILanguageDriver } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./DriverStatus.module.scss";
import { driverClassesByStatus } from "./DriverStatusClasses";

interface IDriverStatus{
  value: string;
};

export const DriverStatus = ({value}: IDriverStatus): ReactElement => {
  const [status, setStatus] = useState(value);
  const [isEdit, setIsEdit] = useState(false);
  const driverLang: ILanguageDriver = useTypedSelector(lang => lang.language.language.driver);  
  
  return (
    <>
      {isEdit
        ? <select
          className={classes.status_changer}
          autoFocus
          defaultValue={status}
          name="driver_status"
          onMouseLeave={() => setIsEdit(false)}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setIsEdit(false);
            setStatus(e.target.value);
          }
          }>
          <option value='active'>{driverLang.statuses.active}</option>
          <option value='blocked'>{driverLang.statuses.blocked}</option>
          <option value='fired'>{driverLang.statuses.fired}</option>
          <option value='not_active'>{driverLang.statuses.not_active}</option>
        </select>
        : <span
          onClick={() => setIsEdit(true)}
          className={classes.preview + ' ' + driverClassesByStatus[status]}>
          {driverLang.statuses[status]}
        </span>
      }     
    </>
  );
};