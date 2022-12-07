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
import { useParams } from "react-router-dom";

export const Driverpage: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  
  const [isVisibleForm, setIsVisibleForm] = useState(false);  

  const dispatch = useDispatch();
  const driver = useTypedSelector(state => state.drivers)
  
  const { id } = useParams();

  useEffect(() => {
      dispatch(requestDrivers(Number(id)))
  }, [dispatch, id]);

  if(driver.isError){
    return (
      <LoadingError />
    );
  };

  if (driver.loading || driver.status === 'idle') {
    return (
      <Loading />
    );
  };  
  
  return (
    <div className={classes.driverpage}>
      <div className={classes.driverpage_header}>
        <span>{menuLang.drivers}</span>
        <button type="button" className={classes.add_driver} onClick={() => {
          setIsVisibleForm(true);
        }}>
          <img src={add} width={15} height={15} alt="add" className={classes.add}/>{menuLang.addDriver}
        </button>
      </div>
      <DriversTableHeader />
      <Driver driver={driver.data[0]} targetId={Number(id)} />
      <div className={classes.wrapper} style={isVisibleForm ? {display: 'block'} : {display: 'none'}}>
        <AddDriverForm onHandler={() => setIsVisibleForm(false)} />
      </div>
    </div>
  );
};