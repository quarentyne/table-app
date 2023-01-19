import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Endpoints } from "../../../../api/endpoints";
import { carsClassesTitleSelector } from "../../../../shared/helpers/carsClasses";
import { Actions } from "../../../../shared/components/Actions/Actions";
import { DataEditor } from "../../../../shared/components/DataEditor/DataEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/helpers/inputPatterns";
import { Action, CarsTableInner, ID, Mark, Model, Name, PlateNumber, Status, Year } from "./styles";
import { CarStatusEditor } from "../../../../shared/components/CarStatusEditor/CarStatusEditor";
import { updateCar } from "../../features/actionCreators";

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

  const updateCarOptions = () => { 
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
    dispatch(updateCar(Number(id), car, redirectID))
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
          onUpdate={updateCarOptions}
          pattern={namePattern} />
      </Mark>
      <Model>
        <DataEditor
          value={carOptions.model}
          name="model"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={modelPattern} />
      </Model>
      <PlateNumber>
        <DataEditor
          value={carOptions.plateNumber}
          name="plateNumber"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={numberPattern} />
      </PlateNumber>
      <Year>
        <DataEditor
          value={carOptions.year}
          name="year"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={yearPattern} />
      </Year>      
      <Status>
        <CarStatusEditor
          status={carOptions.status}
          name="status"
          onUpdate={updateCarOptions}
          onChange={handleChange} />
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