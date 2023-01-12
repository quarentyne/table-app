import { ChangeEvent, useRef, useState } from "react";
import { useClickSaver } from "../../hooks/useClickSaver";
import { StatusEditorSpan } from "./EditorSpan";

interface IStatusEditor { 
  status: string;
  children: JSX.Element;
  name: string;
  onChange: (data: ChangeEvent<HTMLSelectElement>) => void;
  onUpdate: () => void;
  entity: string;
};

export const StatusEditor = ({status, onUpdate, name, children, onChange, entity}: IStatusEditor) => {
  const [isEdit, setIsEdit] = useState(false);
  const rootElement = useRef<HTMLSelectElement>(null);

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
          {children}
          </select>
        : <StatusEditorSpan onClick={toggleEditorState} status={status} entity={entity} />     
      }
    </>
  );
};