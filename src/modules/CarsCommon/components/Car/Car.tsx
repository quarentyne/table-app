import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Endpoints } from "../../../../api/endpoints";
import { carsClassesTitleSelector } from "../../../../shared/helpers/carsClasses";
import { ActionButtons } from "../../../../shared/components/ActionButtons/ActionButtons";
import { InputDataEditor } from "../../../../shared/components/InputDataEditor/InputDataEditor";
import { modelPattern, namePattern, numberPattern, yearPattern } from "../../../../shared/helpers/inputPatterns";
import { Action, CarsTableInner, ID, Mark, Model, Name, PlateNumber, Status, Year } from "./styles";
import { CarStatusEditor } from "../../../../shared/components/CarStatusEditor/CarStatusEditor";

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
  driverName: string;
  onDelete: (carId: string) => void;
  dispatchNewCarOption: (id: string, car: string) => void;
};

export const Car = ({id, model, mark, year, number, driverId, status,  onDelete, driverName, dispatchNewCarOption }: ICar) => {
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
    dispatchNewCarOption(id, car);
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
        <InputDataEditor
          value={carOptions.mark}
          name="mark"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={namePattern} />
      </Mark>
      <Model>
        <InputDataEditor
          value={carOptions.model}
          name="model"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={modelPattern} />
      </Model>
      <PlateNumber>
        <InputDataEditor
          value={carOptions.plateNumber}
          name="plateNumber"
          onChange={handleChange}
          onUpdate={updateCarOptions}
          pattern={numberPattern} />
      </PlateNumber>
      <Year>
        <InputDataEditor
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
        <ActionButtons
          eyeHint={t("actions.drivers")}
          deleteHint={t("actions.delete")}
          onDelete={onDelete.bind(null, id)}
          linkTo={`/${Endpoints.DRIVERS}${driverId}`}
        />
      </Action>
    </CarsTableInner>
  );
};