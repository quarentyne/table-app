import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActionButtons } from "../../../../shared/components/ActionButtons/ActionButtons";
import { InputDataEditor } from "../../../../shared/components/InputDataEditor/InputDataEditor";
import { DriverStatusEditor } from "../../../../shared/components/DriverStatusEditor/DriverStatusEditor";
import { driverStatusTitleSelector } from "../../../../shared/helpers/driversStatuses";
import { datePattern, fullNamePattern } from "../../../../shared/helpers/inputPatterns";
import { Action, Birthday, DriversTable, ID, Name, Registration, Status } from "./styles";

interface IDriver{
  id: number;
  firstName: string;
  lastName: string;
  dateCreated: number;
  dateBirth: number;
  status: {
    code: string;
    title: string;
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, driver: string) => void;
};

export const Driver = ({id, firstName, lastName, dateBirth, dateCreated, status, onDelete, onUpdate}: IDriver) => {
  const { t } = useTranslation();

  const birthDate: Date = new Date(dateBirth);
  const joinDate: Date = new Date(dateCreated);

  const renderDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const validateDate = (value: number): string => `0${value}`;
    return ((day < 10 ? validateDate(day) : day) + '.' + (month < 10 ? validateDate(month) : month) + '.' + date.getFullYear());
  };

  const [driverOptions, setDriverOptions] = useState({
    fullName: `${firstName} ${lastName}`,
    birthDate: renderDate(birthDate),
    status: status.code,
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setDriverOptions({ ...driverOptions, [e.target.name]: e.target.value })
  };

  const updateDriverOptions = () => {
    const title = driverStatusTitleSelector(driverOptions.status);
    const name = driverOptions.fullName.split(' ');    
    const date = driverOptions.birthDate.split('.');
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
    onUpdate(id, driver)
  };

  return (
    <DriversTable>
      <ID>
        {id}
      </ID>
      <Name>
        <InputDataEditor
          value={driverOptions.fullName}
          name="fullName"
          pattern={fullNamePattern}
          onChange={handleChange}
          onUpdate={updateDriverOptions} />
      </Name>
      <Birthday>
        <InputDataEditor
          value={driverOptions.birthDate}
          name="birthDate"
          pattern={datePattern}
          onChange={handleChange}
          onUpdate={updateDriverOptions} />
      </Birthday>
      <Registration>
        {renderDate(joinDate)}
      </Registration>
      <Status>
        <DriverStatusEditor
          status={driverOptions.status}
          name="status"
          onUpdate={updateDriverOptions}
          onChange={handleChange} />
      </Status>
      <Action>
        <ActionButtons
          eyeHint={t("actions.autos")}
          deleteHint={t("actions.delete")}
          linkTo={`/car/driverId=${id}`}
          onDelete={onDelete.bind(null, id)}
        />
      </Action>
    </DriversTable>
  );
};