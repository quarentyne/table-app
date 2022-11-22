import { ReactElement } from "react";
import { ILanguageCar } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "../../scss/CarsTable.module.scss";

export const CarsTableHeader = (): ReactElement => { 
  const carLang: ILanguageCar = useTypedSelector(lang => lang.language.language.car);

  return (
    <ul className={classes.cars_table + ' ' + classes.cars_table_header}>
      <li>ID</li>
      <li>{carLang.name}</li>
      <li>{carLang.mark}</li>
      <li>{carLang.model}</li>
      <li>{carLang.number}</li>
      <li>{carLang.year}</li>
      <li>{carLang.status}</li>
      <li>{carLang.actions}</li>
    </ul>
  );
};