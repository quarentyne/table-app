import { ReactElement } from "react";
import { ILanguage, ILanguageActions } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import tableClasses from "../../scss/DriversTable.module.scss";
import { Actions } from "../actions/Actions";
import driverStatusClasses from "./DriverStatus.module.scss";
import { driverClassesByStatus } from "./DriverStatusClasses";
import { useDispatch } from "react-redux";
import { deleteDriver, patchDriver } from "../../sagas/actions";
import { DRIVER_STATUSES } from "../../constants/statuses";
import { TextDataEditor } from "../textDataEditor/TextDataEditor";
import { datePattern, fullNamePattern } from "../../constants/inputPatterns";
import { DriversStatus } from "../driversStatus/DriversStatus";

export interface IDriver {
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

export const Driver = (props: IDriver): ReactElement => {
  const birthDate: Date = new Date(props.driver.date_birth);
  const joinDate: Date = new Date(props.driver.date_created);

  const language: ILanguage = useTypedSelector(lang => lang.language.language);
  const menuLang: ILanguageActions = language.actions;

  const renderDate = (date: Date): string => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const checker = (value: number): string => '0' + value;
    return ((day < 10 ? checker(day) : day) + '.' + (month < 10 ? checker(month) : month) + '.' + date.getFullYear());
  };

  const dispatch = useDispatch();

  const saveName = (data: string) => {
    const fullName = data.split(' ');
    const driver = JSON.stringify(
      {
        first_name: fullName[0],
        last_name: fullName[1],
      }
    );
    dispatch(patchDriver(props.driver.id, driver));
  };

  const saveBirthDate = (data: string) => {
    const driver = JSON.stringify(
      {
        date_birth: Date.parse(data),
      }
    );
    dispatch(patchDriver(props.driver.id, driver));
  };

  const saveStatus = (data: string) => {
    const driver = JSON.stringify({
      status: {
        code: data,
        title: DRIVER_STATUSES[data],
      },
    });
    dispatch(patchDriver(props.driver.id, driver));
  };

  return (
    <>
      <ul className={tableClasses.drivers_table + ' ' + tableClasses.drivers_table_element}>
        <li>{props.driver.id}</li>
        <li><TextDataEditor value={props.driver.first_name + ' ' + props.driver.last_name} pattern={fullNamePattern} onSave={saveName} /></li>
        <li><TextDataEditor value={renderDate(birthDate)} pattern={datePattern} onSave={saveBirthDate} /></li>
        <li>{renderDate(joinDate)}</li>
        <li><DriversStatus
          status={props.driver.status.code}
          statusStyle={driverStatusClasses.preview + ' ' + driverClassesByStatus[props.driver.status.code]}
          onSave={saveStatus} />
        </li>
        <li><Actions eyeText={menuLang.autos} deleteText={menuLang.delete} onDelete={() => dispatch(deleteDriver(props.driver.id))} /></li>
      </ul>
    </>
  );
};