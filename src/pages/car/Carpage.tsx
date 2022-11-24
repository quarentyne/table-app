import { FC, useState } from "react";
import { ILanguageMenu } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./Carpage.module.scss";
import add from "../../assets/add.svg";
import { CarsTableHeader } from "../../components/carsTableHeader/CarsTableHeader";
import { AddCarForm } from "../../components/addCarForm/AddCarForm";
import { Car } from "../../components/car/Car";

const car = {
  model: 'Lanos',
	mark: 'Daewoo',
	year: 2007,
	number: 'AX1029KL',
	driver_id: 6,
	status: {
    title: 'Стандарт',
    code: 'standart',
  },
}

export const Carpage: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  
  const [isVisibleForm, setIsVisibleForm] = useState(false);  
  
  return (
    <div>
      <div className={classes.carpage_header}>
        <span>{menuLang.cars}</span>
        <button type="button" className={classes.add_car} onClick={() => {
          setIsVisibleForm(true);
        }}>
          <img src={add} width={15} height={15} alt="add" className={classes.add}/>{menuLang.addCar}
        </button></div>
      <CarsTableHeader />

      <Car car={car} />

      <div className={classes.wrapper} style={isVisibleForm ? {display: 'block'} : {display: 'none'}}>
        <AddCarForm onHandler={() => setIsVisibleForm(false)} />
      </div>
    </div>
  );
};