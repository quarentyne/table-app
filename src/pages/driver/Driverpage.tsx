import { FC } from "react";
import { Driver } from "../../components/driver/Driver";
import { ILanguageMenu } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import add from "../../assets/add.svg";
import classes from "./Driverpage.module.scss";
import { DriversTableHeader } from "../../components/driversTableHeader/DriversTableHeader";

const a = {
  first_name: "John",
  last_name: "Doe",
  date_birth: 855007200000,
  date_created: 1667392616000,
  id: 6,
  status: {
    title: "Не активный",
    code: "not_active",
  },
};  

export const Driverpage: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  

  return (
    <div>
      <div className={classes.driverpage_header}>
        <span>{menuLang.drivers}</span>
        <button type="button" className={classes.add_driver}>
          <img src={add} width={15} height={15} alt="add" className={classes.add}/>{menuLang.addDriver}
        </button>
      </div>
      <DriversTableHeader />
      <Driver driver={a} />
    </div>
  );
};