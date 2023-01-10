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
  const [carOptions, setCarOptions] = useState({
    model: carModel,
    mark: carMark,
    year: String(carYear),
    plateNumber: carNumber,
    status: carStatus.code,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setCarOptions({ ...carOptions, [e.target.name]: e.target.value })
  };

  const saveCar = () => { 
    const title = carsClassesTitleSelector(carOptions.status);

    const car = JSON.stringify({
      model: carOptions.model,
      mark: carOptions.mark,
      year: Number(carOptions.year),
      status: {
        code: carOptions.status,
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
          value={carOptions.mark}
          name="mark"
          onChange={handleChange}
          onSave={saveCar}
          pattern={namePattern} />
      </Mark>
      <Model>
        <DataEditor
          value={carOptions.model}
          name="model"
          onChange={handleChange}
          onSave={saveCar}
          pattern={modelPattern} />
      </Model>
      <PlateNumber>
        <DataEditor
          value={carOptions.plateNumber}
          name="plateNumber"
          onChange={handleChange}
          onSave={saveCar}
          pattern={numberPattern} />
      </PlateNumber>
      <Year>
        <DataEditor
          value={carOptions.year}
          name="year"
          onChange={handleChange}
          onSave={saveCar}
          pattern={yearPattern} />
      </Year>      
      <Status>
        <StatusEditor
          status={carOptions.status}
          name="status"
          onSave={saveCar}
          onChange={handleChange}
          entity={Entitys.CAR}
          options={<CarsStatuses />} />
      </Status>
      <Action>
        <Actions
          eyeText={t("actions.drivers")}
          deleteText={t("actions.delete")}
          onDelete={onDelete.bind(null, Number(id), targetId)}
          linkTo={`/${Endpoints.DRIVERS}${driver_id}`}
          state={driver_id}
        />
      </Action>
    </CarsTableInner>
  );
};