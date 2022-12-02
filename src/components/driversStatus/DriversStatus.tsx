import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IDriversStatus{
  statusStyle: string;
  status: string;
  onSave: (data: string) => void;
};

export const DriversStatus = ({status, statusStyle, onSave}: IDriversStatus) => {
  const [isEdit, setIsEdit] = useState(false);
  const language = useTypedSelector(state=>state.language.language.driver.statuses)

  return(
    <>
      {isEdit ?
        <select defaultValue={status} onChange={(e) => {
          setIsEdit(false);
          onSave(e.target.value);
        }}>
            <option value='active'>{language.active}</option>
            <option value='blocked'>{language.blocked}</option>
            <option value='fired'>{language.fired}</option>
            <option value='not_active'>{language.not_active}</option>
          </select>
        : <span
          onClick={() => setIsEdit(true)}
          className={statusStyle}>{language[status]}</span>
      }
    </>
  );
};