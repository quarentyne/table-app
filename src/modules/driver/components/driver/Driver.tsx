import { useState } from "react";
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
  
  const [fullName, setFullName] = useState(first_name + ' ' + last_name);
  const [birth, setBirth] = useState(renderDate(birthDate));
  const [status, setStatus] = useState(driverStatus.code);

  const saveDriver = () => {
    const title = driverStatusTitleSelector(status);
    const name = fullName.split(' ');    
    const driver = JSON.stringify({
      first_name: name[0],
      last_name: name[1],
      date_birth: Date.parse(birth),
      status: {
        code: status,
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
          value={fullName}
          pattern={fullNamePattern}
          onChange={setFullName}
          onSave={saveDriver} />
      </Name>
      <Birthday>
        <DataEditor
          value={birth}
          pattern={datePattern}
          onChange={setBirth}
          onSave={saveDriver} />
      </Birthday>
      <Registrated>
        {renderDate(joinDate)}
      </Registrated>
      <Status>
        <StatusEditor
          status={status}
          onSave={saveDriver}
          onChange={setStatus}
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