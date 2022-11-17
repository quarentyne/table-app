import { ReactElement } from "react";
import classes from "../../scss/DriversTable.module.scss";
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

export const Driver = ({ driver } : IDriver ): ReactElement => {
  const birthDate: Date = new Date(driver.date_birth);
  const joinDate: Date = new Date(driver.date_created);

  const renderDate = (date: Date): string => {
    return (date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
  };

  return (
    <ul className={classes.drivers_table + ' ' + classes.drivers_table_element}>
      <li>{driver.id}</li>
      <li><DriverName firstName={driver.first_name} lastName={driver.last_name} /></li>
      <li>{renderDate(birthDate)}</li>
      <li>{renderDate(joinDate)}</li>
      <li><DriverStatus value={driver.status.code} /></li>
      <li>actions</li>
    </ul>
  );
};