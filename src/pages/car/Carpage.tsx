import { FC, useEffect, useState } from "react";
import { ILanguageMenu } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./Carpage.module.scss";
import add from "../../assets/add.svg";
import { CarsTableHeader } from "../../components/carsTableHeader/CarsTableHeader";
import { AddCarForm } from "../../components/addCarForm/AddCarForm";
import { Car } from "../../components/car/Car";
import { requestCars } from "../../sagas/actions";
import { useDispatch } from "react-redux";
import { LoadingError } from "../../components/loadingError/LoadingError";
import { Loading } from "../../components/loading/Loading";

export const Carpage: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  
  const [isVisibleForm, setIsVisibleForm] = useState(false);  
  const dispatch = useDispatch();
  const cars = useTypedSelector(state=>state.cars)

  useEffect(() => {
    dispatch(requestCars())
  }, [dispatch]);

  if(cars.isError){
    return (
      <LoadingError />
    );
  };

  if (cars.loading) {
    return (
      <Loading />
    );
  };
  
  return (
    <div>
      <div className={classes.carpage_header}>
        <span>{menuLang.cars + ' (' + cars.data.length + ')'}</span>
        <button type="button" className={classes.add_car} onClick={() => {
          setIsVisibleForm(true);
        }}>
          <img src={add} width={15} height={15} alt="add" className={classes.add}/>{menuLang.addCar}
        </button></div>
      <CarsTableHeader />
      {cars.data.map(car => <Car car={car} key={car.id} />)}

      <div className={classes.wrapper} style={isVisibleForm ? {display: 'block'} : {display: 'none'}}>
        <AddCarForm onHandler={() => setIsVisibleForm(false)} />
      </div>
    </div>
  );
};