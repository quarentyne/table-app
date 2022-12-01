import { IAddCar, ILanguage, ILanguageCar } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AddCarForm.module.scss";
import { useState } from "react";
import { CARS_CLASSES } from "../../constants/carsClasses";
import { FormButtons } from "../formButtons/FormButtons";

interface IAddCarForm {
  onHandler: () => void;
};

export const AddCarForm = ({onHandler}: IAddCarForm) => {
  const language: ILanguage = useTypedSelector(lang => lang.language.language);
  const carLang: ILanguageCar = language.car;
  const formLang: IAddCar = language.addCar;
  

  const [mark, setMark] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [year, setYear] = useState('');
  const [carsClass, setCarsClass] = useState('standart');

  const namePattern = '[a-zA-Z]{2,}';
  const numberPattern = '[A-Z]{2}[0-9]{4}[A-Z]{2}';
  const yearPatter = '([1][9][6-9][0-9]|[2][0-2][0-9]{2})';

  const cancelHandler = () => {
    setMark('');
    setModel('');
    setNumber('');
    setYear('');
  };

  const addHandler = () => {
    const obj = {
      model: model,
      mark: mark,
      year: Number(year),
      driver_id: 0,
      status: {
        code: carsClass,
        title: CARS_CLASSES[carsClass],
      },
    };
    cancelHandler();
    console.log(obj);
  }

  return (
    <form className={classes.add_car_form} onSubmit={(e) => {
      e.preventDefault();
      onHandler();
      addHandler();
    }}>
      <label htmlFor="owner">{formLang.owner}</label>
      <select id="owner" name="owner">
        <option>Driver</option>
      </select>
      <input type='text' required pattern={namePattern} placeholder={formLang.mark} value={mark} onChange={(e) => setMark(e.target.value)} />
      <input type='text' required pattern={namePattern} placeholder={formLang.model} value={model} onChange={(e) => setModel(e.target.value)} />
      <input type='text' required pattern={numberPattern} placeholder={formLang.number} value={number} onChange={(e) => setNumber(e.target.value)} />
      <input type='text' required pattern={yearPatter} placeholder={formLang.year} value={year} onChange={(e) => setYear(e.target.value)} />
      <label htmlFor="carsClass">{formLang.status}</label>
      <select id="carsClass" name="carsClass" defaultValue={carsClass} onChange={(e) => setCarsClass(e.target.value)}>
        <option value='econom'>{carLang.statuses.econom}</option>
        <option value='eco'>{carLang.statuses.eco}</option>
        <option value='standart'>{carLang.statuses.standart}</option>
        <option value='bussiness'>{carLang.statuses.bussiness}</option>
      </select>
      <FormButtons onCancel={() => {
          onHandler();
          cancelHandler();
        }}/>
    </form>
  );
};