import { ReactElement } from "react";
import { ILanguageActions } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "../../scss/DriversTable.module.scss";
import { Actions } from "../actions/Actions";
import { DriverName } from "../driverName/DriverName";
import { DriverStatus } from "../driverStatus/DriverStatus";

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

  const menuLang: ILanguageActions = useTypedSelector(lang => lang.language.language.actions);  

  const renderDate = (date: Date): string => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const checker = (value: number): string => '0' + value;
    return ((day < 10 ? checker(day) : day) + '.' + (month < 10 ? checker(month) : month) + '.' + date.getFullYear());
  };

  return (
    <ul className={classes.drivers_table + ' ' + classes.drivers_table_element}>
      <li>{driver.id}</li>
      <li><DriverName firstName={driver.first_name} lastName={driver.last_name} /></li>
      <li>{renderDate(birthDate)}</li>
      <li>{renderDate(joinDate)}</li>
      <li><DriverStatus value={driver.status.code} /></li>
      <li><Actions eyeText={menuLang.autos} deleteText={menuLang.delete} /></li>
    </ul>
  );
};