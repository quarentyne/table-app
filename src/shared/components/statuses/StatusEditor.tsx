import { useEffect, useRef, useState } from "react";
import { StatusEditorSpan } from "./EditorSpan";

interface IStatusEditor { 
  status: string;
  options: JSX.Element;
  onChange: (data: string) => void;
  onSave: () => void;
  entity: string;
};

export const StatusEditor = ({status, onSave, options, onChange, entity}: IStatusEditor) => {
  const [isEdit, setIsEdit] = useState(false);
  const rootEl = useRef<HTMLSelectElement>(null);

  const saveData = () => {
    setIsEdit(false);
    onSave();
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!rootEl.current) {
        return;
      };   

      const onClickPosition = {
        top: e.y,
        left: e.x,
      };
      const elementOnEditParams = rootEl.current.getBoundingClientRect();
      const elementOnScreen = {
        top: elementOnEditParams.y,
        left: elementOnEditParams.x,
        width: elementOnEditParams.width,
        height: elementOnEditParams.height,
      };
      
      if (((onClickPosition.left < elementOnScreen.left) || (onClickPosition.left > (elementOnScreen.left + elementOnScreen.width)) ||
        (onClickPosition.top < elementOnScreen.top) || (onClickPosition.top > (elementOnScreen.top + elementOnScreen.height)))) { 
        saveData();
      };
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  });

  return(
    <>
      {isEdit
        ? <select
          defaultValue={status}
          ref={rootEl}
          onChange={(e) => {
            onChange(e.target.value);
          }}>
          {options}
          </select>
        : <StatusEditorSpan onClick={() => setIsEdit(true)} status={status} entity={entity} />     
      }
    </>
  );
};