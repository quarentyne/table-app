import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { DriversStatuses } from "../../../../shared/components/statuses/drivers/DriversStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { driverStatusTitleSelector } from "../../../../shared/helpers/driversStatuses";
import { Entitys } from "../../../../shared/helpers/entitys";
import { datePattern, fullNamePattern } from "../../../../shared/helpers/inputPatterns";
import { patchDriver } from "../../selectors";
import { Action, Birthday, DriversTable, ID, Name, Registrated, Status } from "./styles";

interface IDriver{
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  driverStatus: {
    code: string;
    title: string;
  };
  targetId?: number;
  onDelete: (id: number) => void;
};

export const Driver = ({id, first_name, last_name, date_birth, date_created, driverStatus, targetId, onDelete}: IDriver) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();  

  const birthDate: Date = new Date(date_birth);
  const joinDate: Date = new Date(date_created);

  const renderDate = (date: Date): string => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const checker = (value: number): string => '0' + value;
    return ((day < 10 ? checker(day) : day) + '.' + (month < 10 ? checker(month) : month) + '.' + date.getFullYear());
  };

  const [driverOptions, setDriverOptions] = useState({
    fullName: `${first_name} ${last_name}`,
    birth: renderDate(birthDate),
    status: driverStatus.code,
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setDriverOptions({ ...driverOptions, [e.target.name]: e.target.value })
  };

  const saveDriver = () => {
    const title = driverStatusTitleSelector(driverOptions.status);
    const name = driverOptions.fullName.split(' ');    
    const date = driverOptions.birth.split('.');
    const refactoredDate = `${date[1]}.${date[0]}.${date[2]}`;

    const driver = JSON.stringify({
      first_name: name[0],
      last_name: name[1],
      date_birth: Date.parse(refactoredDate),
      status: {
        code: driverOptions.status,
        title,
      },
    });
    dispatch(patchDriver(id, driver, targetId));
  };

  return (
    <DriversTable>
      <ID>
        {id}
      </ID>
      <Name>
        <DataEditor
          value={driverOptions.fullName}
          name="fullName"
          pattern={fullNamePattern}
          onChange={handleChange}
          onSave={saveDriver} />
      </Name>
      <Birthday>
        <DataEditor
          value={driverOptions.birth}
          name="birth"
          pattern={datePattern}
          onChange={handleChange}
          onSave={saveDriver} />
      </Birthday>
      <Registrated>
        {renderDate(joinDate)}
      </Registrated>
      <Status>
        <StatusEditor
          status={driverOptions.status}
          name="status"
          onSave={saveDriver}
          onChange={handleChange}
          entity={Entitys.DRIVER}
          options={<DriversStatuses />} />
      </Status>
      <Action>
        <Actions
          eyeText={t("actions.autos")}
          deleteText={t("actions.delete")}
          linkTo="/car"
          onDelete={onDelete.bind(null, id)}
          state={id}
        />
      </Action>
    </DriversTable>
  );
};