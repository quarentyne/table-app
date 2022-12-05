import { ReactElement, useState } from "react";
import { IAddCar, ILanguage, ILanguageActions, ILanguageCar } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import tableClasses from '../../scss/CarsTable.module.scss';
import { Actions } from "../actions/Actions";
import { carClassesByClass } from "./CarClasses";
import carClasses from './CarClasses.module.scss';
import carPageClasses from '../../pages/car/Carpage.module.scss';
import carFormClasses from '../addCarForm/AddCarForm.module.scss';
import { FormButtons } from "../formButtons/FormButtons";


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
  const menuLang: ILanguageActions = language.actions;
  const carLang: ILanguageCar = language.car;
  const formLang: IAddCar = language.addCar;

  const [mark, setMark] = useState(car.mark);
  const [model, setModel] = useState(car.model);
  const [number, setNumber] = useState(car.number);
  const [year, setYear] = useState(car.year);
  const [carsClass, setCarsClass] = useState(car.status.code);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditClass, setIsEditClass] = useState(false);


  const namePattern = '[a-zA-Z]{2,}';
  const numberPattern = '[A-Z]{2}[0-9]{4}[A-Z]{2}';
  const yearPatter = '([1][9][6-9][0-9]|[2][0-2][0-9]{2})';

  const cancelHandler = () => {
    setMark(car.mark);
    setModel(car.model);
    setNumber(car.number);
    setYear(car.year);
    setCarsClass(car.status.code);
    setIsEdit(false);
    setIsEditClass(false);
  };

  const saveCarOptions = () => {
    
  };

  return (
    <>
      <ul className={tableClasses.cars_table + ' ' + tableClasses.cars_table_element}>
        <li>{car.id}</li>
        <li>{car.driver_id}</li>
        <li onClick={() => setIsEdit(true)}>{mark}</li>
        <li onClick={() => setIsEdit(true)}>{model}</li>
        <li onClick={() => setIsEdit(true)}>{number}</li>
        <li onClick={() => setIsEdit(true)}>{year}</li>
        <li onClick={() => setIsEditClass(true)}><span className={carClasses.preview + ' ' + carClassesByClass[carsClass]}>{carLang.statuses[carsClass]}</span></li>
        <li><Actions eyeText={menuLang.drivers} deleteText={menuLang.delete} /></li>
      </ul>
    </>
  );
};