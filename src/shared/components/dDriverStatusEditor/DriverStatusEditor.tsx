import { ChangeEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getDriversStatusesOptionsParams } from "../../helpers/driversStatuses";
import { useClickSaver } from "../../hooks/useClickSaver";
import { EditorSpan } from "./styles";

interface IDriverStatusEditor { 
  status: string;
  name: string;
  onChange: (data: ChangeEvent<HTMLSelectElement>) => void;
  onUpdate: () => void;
};

export const DriverStatusEditor = ({status, onUpdate, name, onChange}: IDriverStatusEditor) => {
  const [isEdit, setIsEdit] = useState(false);
  const rootElement = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation();

  const toggleEditorState = () => {
    setIsEdit(!isEdit);
  };

  const saveData = () => {
    toggleEditorState();
    onUpdate();
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };
  
  const getOptions = getDriversStatusesOptionsParams(t);  
  useClickSaver({ save: saveData, rootElement });

  return(
    <>
      {isEdit
        ? <select
          name={name}
          defaultValue={status}
          ref={rootElement}
          onChange={handleChangeEvent}>
          {getOptions.map((item, i) => <option key={i} value={item.value}>{item.translation}</option>)}
        </select>
        : <EditorSpan
          code={status}
          onClick={toggleEditorState}>
          {t(`driver.statuses.${status}`)}
        </EditorSpan>            
      }
    </>
  );
};