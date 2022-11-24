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

  return (
    <>
      <ul className={tableClasses.cars_table + ' ' + tableClasses.cars_table_element}>
        <li>{car.driver_id}</li>
        <li>Name</li>
        <li onClick={() => setIsEdit(true)}>{mark}</li>
        <li onClick={() => setIsEdit(true)}>{model}</li>
        <li onClick={() => setIsEdit(true)}>{number}</li>
        <li onClick={() => setIsEdit(true)}>{year}</li>
        <li onClick={() => setIsEditClass(true)}><span className={carClasses.preview + ' ' + carClassesByClass[carsClass]}>{carLang.statuses[carsClass]}</span></li>
        <li><Actions eyeText={menuLang.drivers} deleteText={menuLang.delete} /></li>
      </ul>
      <div className={carPageClasses.wrapper} style={isEdit ? {display: 'block'} : {display: 'none'}}>
        <form className={carFormClasses.add_car_form} onSubmit={(e) => {
          e.preventDefault();
          setIsEdit(false);
          console.log({
            model: model,
            mark: mark,
            year: year,
            number: number,
          });          
        }}>
          <input type='text' required pattern={namePattern} placeholder={formLang.mark} value={mark} onChange={(e) => setMark(e.target.value)} />
          <input type='text' required pattern={namePattern} placeholder={formLang.model} value={model} onChange={(e) => setModel(e.target.value)} />
          <input type='text' required pattern={numberPattern} placeholder={formLang.number} value={number} onChange={(e) => setNumber(e.target.value)} />
          <input type='text' required pattern={yearPatter} placeholder={formLang.year} value={year} onChange={(e) => setYear(Number(e.target.value))} />
          <FormButtons onHandler={() => {
              cancelHandler();
            }}/>
        </form>
      </div>
      <div className={carPageClasses.wrapper} style={isEditClass ? {display: 'block'} : {display: 'none'}}>
        <form className={carFormClasses.add_car_form} onSubmit={(e) => {
          e.preventDefault();
          setIsEditClass(false);
          console.log(carsClass);          
        }}>
          <label htmlFor="carsClass">{formLang.status}</label>
          <select id="carsClass" name="carsClass" defaultValue={carsClass} onChange={(e) => setCarsClass(e.target.value)}>
            <option value='econom'>{carLang.statuses.econom}</option>
            <option value='eco'>{carLang.statuses.eco}</option>
            <option value='standart'>{carLang.statuses.standart}</option>
            <option value='bussiness'>{carLang.statuses.bussiness}</option>
          </select>
          <FormButtons onHandler={() => {
              cancelHandler();
            }}/>
        </form>
      </div>
    </>
  );
};