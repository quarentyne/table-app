import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Endpoints } from "../../../../api/endpoints";
import { carsClassesTitleSelector } from "../../../../helpers/carsClasses";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../helpers/inputPatterns";
import { patchCar } from "../../selectors";
import { Action, CarsTableInner, ID, Mark, Model, Name, PlateNumber, Status, Year } from "./styles";

interface ICar{
  id: string;
  carModel: string,
  carMark: string,
  carYear: number,
  carNumber: string,
  driver_id: number,
  carStatus: {
    title: string,
    code: string,
  },
  targetId?: number;
  driverName: string;
  onDelete: (carId: number, redirectTargetId?: number) => void;
};

export const Car = ({id, carModel, carMark, carYear, carNumber, driver_id, carStatus, targetId, onDelete, driverName }: ICar) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [model, setModel] = useState(carModel);
  const [mark, setMark] = useState(carMark);
  const [year, setYear] = useState(String(carYear));
  const [plateNumber, setPlateNumber] = useState(carNumber);
  const [status, setStatus] = useState(carStatus.code);

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
    dispatch(patchCar(Number(id), car, targetId))
  };

  return (
    <CarsTableInner>
      <ID>
        {id}
      </ID>
      <Name>
        {driverName}
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
          onDelete={onDelete.bind(null, Number(id), targetId)}
          linkTo={`/${Endpoints.DRIVERS}${driver_id}`}/>
      </Action>
    </CarsTableInner>
  );
};