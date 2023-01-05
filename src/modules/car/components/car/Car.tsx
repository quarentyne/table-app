import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { carsClassesTitleSelector } from "../../../../helpers/carsClasses";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/constants/inputPatterns";
import { useTypedSelector } from "../../../../shared/hooks/useTypedSelector";
import { deleteCar, patchCar } from "../../selectors";
import { Action, CarsTableInner, ID, Mark, Model, Name, PlateNumber, Status, Year } from "./styles";

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
  targetId?: number;
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
    const title = carsClassesTitleSelector(status);

    const car = JSON.stringify({
      model,
      mark,
      year: Number(year),
      status: {
        code: status,
        title,
      }
    });
    dispatch(patchCar(Number(props.id), car, props.targetId))
  };

  return (
    <CarsTableInner>
      <ID>
        {props.id}
      </ID>
      <Name>
        {owner?.first_name + " " + owner?.last_name}
      </Name>
      <Mark>
        <DataEditor
          value={mark}
          onChange={setMark}
          onSave={saveCar}
          pattern={namePattern} />
      </Mark>
      <Model>
        <DataEditor
          value={model}
          onChange={setModel}
          onSave={saveCar}
          pattern={modelPattern} />
      </Model>
      <PlateNumber>
        <DataEditor
          value={plateNumber}
          onChange={setPlateNumber}
          onSave={saveCar}
          pattern={numberPattern} />
      </PlateNumber>
      <Year>
        <DataEditor
          value={year}
          onChange={setYear}
          onSave={saveCar}
          pattern={yearPattern} />
      </Year>      
      <Status>
        <StatusEditor
          status={status}
          onSave={saveCar}
          onChange={setStatus}
          options={<CarsStatuses />} />
      </Status>
      <Action>
        <Actions
          eyeText={t("actions.drivers")}
          deleteText={t("actions.delete")}
          onDelete={() => dispatch(deleteCar(Number(props.id), props.targetId))}
          linkTo={`/driver/${props.driver_id}`}/>
      </Action>
    </CarsTableInner>
  );
};