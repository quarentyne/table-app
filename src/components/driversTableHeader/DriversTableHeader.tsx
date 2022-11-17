import { ReactElement } from "react";
import { ILanguageDriver } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "../../scss/DriversTable.module.scss";

export const DriversTableHeader = (): ReactElement => { 
  const driverLang: ILanguageDriver = useTypedSelector(lang => lang.language.language.driver);

  return (
    <ul className={classes.drivers_table + ' ' + classes.drivers_table_header}>
      <li>ID</li>
      <li>{driverLang.name}</li>
      <li>{driverLang.born}</li>
      <li>{driverLang.registered}</li>
      <li>{driverLang.status}</li>
      <li>{driverLang.actions}</li>
    </ul>
  );
};