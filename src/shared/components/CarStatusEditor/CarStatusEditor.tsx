import { ChangeEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { mappedCarsStatusCodes } from "../../helpers/carsClasses";
import { useClickSaver } from "../../hooks/useClickSaver";
import { EditorSpan } from "./styles";

interface ICarStatusEditor { 
  status: string;
  name: string;
  onChange: (data: ChangeEvent<HTMLSelectElement>) => void;
  onUpdate: () => void;
};

export const CarStatusEditor = ({status, onUpdate, name, onChange}: ICarStatusEditor) => {
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

  useClickSaver({ save: saveData, rootElement });

  return(
    <>
      {isEdit
        ? <select
          name={name}
          defaultValue={status}
          ref={rootElement}
          onChange={handleChangeEvent}>
          {mappedCarsStatusCodes.map((status, i) => <option key={i} value={status}>{t(`car.statuses.${status}`)}</option>)}
        </select>
        : <EditorSpan
          code={status}
          onClick={toggleEditorState}>
          {t(`car.statuses.${status}`)}
        </EditorSpan>            
      }
    </>
  );
};