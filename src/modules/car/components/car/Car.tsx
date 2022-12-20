import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { CARS_CLASSES } from "../../../../shared/constants/carsClasses";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/constants/regexp";
import { useTypedSelector } from "../../../../shared/hooks/useTypedSelector";
import { deleteCar, patchCar } from "../../selectors";
import { CarsTableInner, CarsTableInnerItem } from "./styles";

interface ICar{
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
  targetId: number | null;
};

export const Car = (props: ICar) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [model, setModel] = useState(props.model);
  const [mark, setMark] = useState(props.mark);
  const [year, setYear] = useState(String(props.year));
  const [plateNumber, setPlateNumber] = useState(props.number);
  const [status, setStatus] = useState(props.status.code);
  
  const drivers = useTypedSelector(state => state.drivers.data);
  const owner = drivers.find(driver => driver.id === props.driver_id);  

  const saveCar = () => { 
    const car = JSON.stringify({
      model: model,
      mark: mark,
      year: Number(year),
      status: {
        code: status,
        title: CARS_CLASSES[status],
      }
    });
    dispatch(patchCar(Number(props.id), car, props.targetId))
  };

  return (
    <CarsTableInner>
      <CarsTableInnerItem>
        {props.id}
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        {owner?.first_name + " " + owner?.last_name}
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        <DataEditor
          value={mark}
          onChange={setMark}
          onSave={saveCar}
          pattern={namePattern} />
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        <DataEditor
          value={model}
          onChange={setModel}
          onSave={saveCar}
          pattern={modelPattern} />
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        <DataEditor
          value={plateNumber}
          onChange={setPlateNumber}
          onSave={saveCar}
          pattern={numberPattern} />
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        <DataEditor
          value={year}
          onChange={setYear}
          onSave={saveCar}
          pattern={yearPattern} />
      </CarsTableInnerItem>      
      <CarsTableInnerItem>
        <StatusEditor
          status={status}
          onSave={saveCar}
          onChange={setStatus}
          options={<CarsStatuses />} />
      </CarsTableInnerItem>
      <CarsTableInnerItem>
        <Actions
          eyeText={t("menu.drivers")}
          deleteText={t("menu.delete")}
          onDelete={() => dispatch(deleteCar(Number(props.id), props.targetId))}
          linkTo={`/driver/${props.driver_id}`}/>
      </CarsTableInnerItem>
    </CarsTableInner>
  );
};