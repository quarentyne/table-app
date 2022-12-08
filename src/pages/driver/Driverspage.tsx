import { FC, useEffect, useState } from "react";
import { Driver } from "../../components/driver/Driver";
import { ILanguageMenu } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import add from "../../assets/add.svg";
import classes from "./Driverpage.module.scss";
import { DriversTableHeader } from "../../components/driversTableHeader/DriversTableHeader";
import { AddDriverForm } from "../../components/addDriverForm/AddDriverForm";
import { useDispatch } from "react-redux";
import { LoadingError } from "../../components/loadingError/LoadingError";
import { Loading } from "../../components/loading/Loading";
import { requestDrivers } from "../../sagas/actions";

export const Driverspage: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  
  const [isVisibleForm, setIsVisibleForm] = useState(false);  

  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers)

  useEffect(() => {
      dispatch(requestDrivers())
  }, [dispatch]);

  if(drivers.isError){
    return (
      <LoadingError />
    );
  };

  if (drivers.loading) {
    return (
      <Loading />
    );
  };  

  return (
    <div className={classes.driverpage}>
      <div className={classes.driverpage_header}>
        <span>{menuLang.drivers + ' (' + drivers.data.length + ')'}</span>
        <button type="button" className={classes.add_driver} onClick={() => {
          setIsVisibleForm(true);
        }}>
          <img src={add} width={15} height={15} alt="add" className={classes.add}/>{menuLang.addDriver}
        </button>
      </div>
      <DriversTableHeader />
      { drivers.data.map(driver => <Driver driver={driver} key={driver.id} />) }
      <div className={classes.wrapper} style={isVisibleForm ? {display: 'block'} : {display: 'none'}}>
        <AddDriverForm onHandler={() => setIsVisibleForm(false)} />
      </div>
    </div>
  );
};