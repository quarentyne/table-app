import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Endpoints } from "../../../../api/endpoints";
import { carsClassesTitleSelector } from "../../../../shared/helpers/carsClasses";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { CarsStatuses } from "../../../../shared/components/statuses/cars/CarsStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/helpers/inputPatterns";
import { patchCar } from "../../selectors";
import { Action, CarsTableInner, ID, Mark, Model, Name, PlateNumber, Status, Year } from "./styles";
import { Entitys } from "../../../../shared/helpers/entitys";

interface ICar{
  id: string;
  model: string,
  mark: string,
  year: number,
  number: string,
  driverId: number,
  status: {
    title: string,
    code: string,
  },
  redirectID: number | null;
  driverName: string;
  onDelete: (carId: number, redirectID: number | null) => void;
};

export const Car = ({id, model, mark, year, number, driverId, status, redirectID, onDelete, driverName }: ICar) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [carOptions, setCarOptions] = useState({
    model: model,
    mark: mark,
    year: String(year),
    plateNumber: number,
    status: status.code,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setCarOptions({ ...carOptions, [e.target.name]: e.target.value })
  };

  const updateCar = () => { 
    const title = carsClassesTitleSelector(carOptions.status);

    const car = JSON.stringify({
      model: carOptions.model,
      mark: carOptions.mark,
      year: Number(carOptions.year),
      number: carOptions.plateNumber,
      status: {
        code: carOptions.status,
        title,
      }
    });
    dispatch(patchCar(Number(id), car, redirectID))
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
          value={carOptions.mark}
          name="mark"
          onChange={handleChange}
          onUpdate={updateCar}
          pattern={namePattern} />
      </Mark>
      <Model>
        <DataEditor
          value={carOptions.model}
          name="model"
          onChange={handleChange}
          onUpdate={updateCar}
          pattern={modelPattern} />
      </Model>
      <PlateNumber>
        <DataEditor
          value={carOptions.plateNumber}
          name="plateNumber"
          onChange={handleChange}
          onUpdate={updateCar}
          pattern={numberPattern} />
      </PlateNumber>
      <Year>
        <DataEditor
          value={carOptions.year}
          name="year"
          onChange={handleChange}
          onUpdate={updateCar}
          pattern={yearPattern} />
      </Year>      
      <Status>
        <StatusEditor
          status={carOptions.status}
          name="status"
          onUpdate={updateCar}
          onChange={handleChange}
          entity={Entitys.CAR}>
            <CarsStatuses />
          </StatusEditor>
      </Status>
      <Action>
        <Actions
          eyeHint={t("actions.drivers")}
          deleteHint={t("actions.delete")}
          onDelete={onDelete.bind(null, Number(id), redirectID)}
          linkTo={`/${Endpoints.DRIVERS}${driverId}`}
          state={driverId}
        />
      </Action>
    </CarsTableInner>
  );
};