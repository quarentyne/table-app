// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Actions } from "../../../../shared/components/actions/Actions";
import { DataEditor } from "../../../../shared/components/dataEditor/DataEditor";
import { datePattern, fullNamePattern } from "../../../../shared/constants/regexp";
import { DriversTable, DriversTableInnerItems } from "../driversTable/styles";

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
  // const dispatch = useDispatch();
  
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
  
  const save = () => {
    console.log(fullName);
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
          onSave={save} />
      </DriversTableInnerItems>
      <DriversTableInnerItems>
        <DataEditor
          value={birth}
          pattern={datePattern}
          onChange={setBirth}
          onSave={save} />
      </DriversTableInnerItems>
      <DriversTableInnerItems>{renderDate(joinDate)}</DriversTableInnerItems>
      <DriversTableInnerItems>{props.status.code}</DriversTableInnerItems>
      <DriversTableInnerItems>
        <Actions
          eyeText={t("actions.autos")}
          deleteText={t("actions.delete")}
          linkTo=""
          onDelete={() => 1}
          state={props.id}
        />
      </DriversTableInnerItems>
    </DriversTable>
  );
};