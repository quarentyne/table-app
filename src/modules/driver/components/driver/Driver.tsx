import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { DriversStatuses } from "../../../../shared/components/statuses/drivers/DriversStatuses";
import { StatusEditor } from "../../../../shared/components/statuses/StatusEditor";
import { DRIVER_STATUSES } from "../../../../shared/constants/driverStatuses";
import { datePattern, fullNamePattern } from "../../../../shared/constants/regexp";
import { deleteDriver, patchDriver } from "../../selectors";
import { DriversTable, DriversTableInnerItems } from "./styles";

interface IDriver{
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: {
    code: string;
    title: string;
  };
  targetId?: number;
};

export const Driver = (props: IDriver) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const birthDate: Date = new Date(props.date_birth);
  const joinDate: Date = new Date(props.date_created);

  const renderDate = (date: Date): string => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const checker = (value: number): string => '0' + value;
    return ((day < 10 ? checker(day) : day) + '.' + (month < 10 ? checker(month) : month) + '.' + date.getFullYear());
  };
  
  const [fullName, setFullName] = useState(props.first_name + ' ' + props.last_name);
  const [birth, setBirth] = useState(renderDate(birthDate));
  const [status, setStatus] = useState(props.status.code);

  const saveDriver = () => {
    const name = fullName.split(' ');    
    const driver = JSON.stringify({
      first_name: name[0],
      last_name: name[1],
      date_birth: Date.parse(birth),
      status: {
        code: status,
        title: DRIVER_STATUSES[status],
      },
    });

    dispatch(patchDriver(props.id, driver, props.targetId));
  };

  return (
    <DriversTable>
      <DriversTableInnerItems>
        {props.id}
      </DriversTableInnerItems>
      <DriversTableInnerItems>
        <DataEditor
          value={fullName}
          pattern={fullNamePattern}
          onChange={setFullName}
          onSave={saveDriver} />
      </DriversTableInnerItems>
      <DriversTableInnerItems>
        <DataEditor
          value={birth}
          pattern={datePattern}
          onChange={setBirth}
          onSave={saveDriver} />
      </DriversTableInnerItems>
      <DriversTableInnerItems>{renderDate(joinDate)}</DriversTableInnerItems>
      <DriversTableInnerItems>
        <StatusEditor
          status={status}
          onSave={saveDriver}
          onChange={setStatus}
          options={<DriversStatuses />} />
      </DriversTableInnerItems>
      <DriversTableInnerItems>
        <Actions
          eyeText={t("actions.autos")}
          deleteText={t("actions.delete")}
          linkTo="/car"
          onDelete={() => dispatch(deleteDriver(props.id))}
          state={props.id}
        />
      </DriversTableInnerItems>
    </DriversTable>
  );
};