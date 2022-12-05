import { IAddCar, ILanguage, ILanguageCar } from "../../constants/languages";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AddCarForm.module.scss";
import { useEffect, useState } from "react";
import { CARS_CLASSES } from "../../constants/carsClasses";
import { FormButtons } from "../formButtons/FormButtons";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../constants/inputPatterns";
import { addCar, requestDrivers } from "../../sagas/actions";
import { useDispatch } from "react-redux";

interface IAddCarForm {
  onHandler: () => void;
};

export const AddCarForm = ({onHandler}: IAddCarForm) => {
  const language: ILanguage = useTypedSelector(state => state.language.language);
  const drivers = useTypedSelector(state => state.drivers.data)
  const carLang: ILanguageCar = language.car;
  const formLang: IAddCar = language.addCar;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDrivers())
  }, [dispatch]);

  const [mark, setMark] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [year, setYear] = useState('');
  const [carsClass, setCarsClass] = useState('standart');
  const [owner, setOwner] = useState(drivers[0]?.id);

  const cancelHandler = () => {
    setMark('');
    setModel('');
    setNumber('');
    setYear('');
  };

  const addHandler = () => {
    const newCar = JSON.stringify({
      model: model,
      mark: mark,
      number: number,
      year: Number(year),
      driver_id: owner,
      status: {
        code: carsClass,
        title: CARS_CLASSES[carsClass],
      },
    });    
    dispatch(addCar(newCar));
    cancelHandler();
  };

  return (
    <form className={classes.add_car_form} onSubmit={(e) => {
      e.preventDefault();
      onHandler();
      addHandler();
    }}>
      <label htmlFor="owner">{formLang.owner}</label>
      <select
        id="owner"
        name="owner"
        defaultValue={owner}
        onChange={(e) => setOwner(Number(e.target.value))}>
        {drivers.map(driver => {
          if (!driver) {
            return <option value="" disabled>Drivers not found</option>
          };
          return <option key={driver.id} value={driver.id}>{driver.first_name + ' ' + driver.last_name}</option>
        })}
      </select>
      <input type='text' required pattern={namePattern} placeholder={formLang.mark} value={mark} onChange={(e) => setMark(e.target.value)} />
      <input type='text' required pattern={modelPattern} placeholder={formLang.model} value={model} onChange={(e) => setModel(e.target.value)} />
      <input type='text' required pattern={numberPattern} placeholder={formLang.number} value={number} onChange={(e) => setNumber(e.target.value)} />
      <input type='text' required pattern={yearPattern} placeholder={formLang.year} value={year} onChange={(e) => setYear(e.target.value)} />
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