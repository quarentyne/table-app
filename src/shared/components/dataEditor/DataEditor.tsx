import { useEffect, useRef, useState } from "react";
import { EditorInput, EditorSpan } from "./styles";

interface IDataEditor{
  pattern: string;
  value: string;
  onChange: (data: string) => void;
  onSave: () => void;
};

export const DataEditor = ({ value, pattern, onChange, onSave }: IDataEditor) => {
  const [isElementEdit, setElementEdit] = useState(false);
  const rootEl = useRef<HTMLInputElement>(null);
  const regex = new RegExp(pattern);

  const toggleElementEditState = () => {
    setElementEdit(!isElementEdit);
  };

  const saveData = () => {
    if (regex.test(value)) { 
      toggleElementEditState();
      onSave();
    } else {
      rootEl.current?.focus();
    };
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

  return (
    <>
      {
        isElementEdit
          ? <EditorInput
            autoFocus
            required
            ref={rootEl}
            value={value}
            pattern={pattern}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                saveData();
              };
            }}
          />
          : <EditorSpan onClick={toggleElementEditState}>
            {value}
          </EditorSpan>
      }
    </>
  );
};