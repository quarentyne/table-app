import { ReactElement } from "react";
import { ILanguage, ILanguageActions } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import tableClasses from '../../scss/CarsTable.module.scss';
import { Actions } from "../actions/Actions";
import { carClassesByClass } from "./CarClasses";
import carClasses from './CarClasses.module.scss';
import { TextDataEditor } from "../textDataEditor/TextDataEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../constants/inputPatterns";
import { deleteCar, patchCar } from "../../sagas/actions";
import { useDispatch } from "react-redux";
import { CarClasses } from "../carClasses.tsx/CarClasses";
import { CARS_CLASSES } from "../../constants/carsClasses";

interface ICar{
  car: {
    id: string;
    model: string,
    mark: string,
    year: number,
    number: string,
    driver_id: number,
    status: {
      title: string,
      code: string,
    },
  };
};

export const Car = ({ car }: ICar): ReactElement => {
  const language: ILanguage = useTypedSelector(lang => lang.language.language);
  const drivers = useTypedSelector(state => state.drivers.data);
  const owner = drivers.find(driver => driver.id === car.driver_id);
  
  const menuLang: ILanguageActions = language.actions;
  const dispatch = useDispatch();

  
  const saveCarMark = (mark: string) => {
    dispatch(patchCar(Number(car.id), JSON.stringify({ mark })));
  };
  const saveCarModel = (model: string) => {
    dispatch(patchCar(Number(car.id), JSON.stringify({ model })));
  };
  const saveCarNumber = (number: string) => {
    dispatch(patchCar(Number(car.id), JSON.stringify({ number })));
  };
  const saveCarYear = (year: string) => {
    dispatch(patchCar(Number(car.id), JSON.stringify({ year: Number(year) })));
  };
  const saveStatus = (status: string) => {
    dispatch(patchCar(Number(car.id), JSON.stringify({ status: { code: status, title: CARS_CLASSES[status] } })));
  };

  return (
    <>
      <ul className={tableClasses.cars_table + ' ' + tableClasses.cars_table_element}>
        <li>{car.id}</li>
        <li>{owner?.first_name + ' ' + owner?.last_name}</li>
        <li><TextDataEditor value={car.mark} pattern={namePattern} onSave={saveCarMark} /></li>
        <li><TextDataEditor value={car.model} pattern={modelPattern} onSave={saveCarModel} /></li>
        <li><TextDataEditor value={car.number} pattern={numberPattern} onSave={saveCarNumber} /></li>
        <li><TextDataEditor value={String(car.year)} pattern={yearPattern} onSave={saveCarYear} /></li>
        <li><CarClasses status={car.status.code} statusStyle={carClasses.preview + ' ' + carClassesByClass[car.status.code]} onSave={saveStatus} /></li>
        <li><Actions eyeText={menuLang.drivers} deleteText={menuLang.delete} onDelete={() => dispatch(deleteCar(Number(car.id)))} /></li>
      </ul>
    </>
  );
};