import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useClickSaver } from "../../hooks/useClickSaver";
import { EditorInput, EditorSpan } from "./styles";

interface IDataEditor{
  pattern: string;
  value: string;
  name: string;
  onChange: (data: ChangeEvent<HTMLInputElement>) => void;
  onUpdate: () => void;
};

export const DataEditor = ({ value, pattern, name, onChange, onUpdate }: IDataEditor) => {
  const [isElementEdit, setElementEdit] = useState(false);
  const rootElement = useRef<HTMLInputElement>(null);
  const regex = new RegExp(pattern);

  const toggleElementEditState = () => {
    setElementEdit(!isElementEdit);
  };

  const saveData = () => {
    if (regex.test(value)) { 
      toggleElementEditState();
      onUpdate();
    } else {
      rootElement.current?.focus();
    };
  };

  useClickSaver({ save: saveData, rootElement });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      saveData();
    };
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => { 
    onChange(e);
  };
  
  return (
    <>
      {
        isElementEdit
          ? <EditorInput
            autoFocus
            required
            ref={rootElement}
            value={value}
            pattern={pattern}
            name={name}
            onChange={handleChangeEvent}
            onKeyDown={handleKeyDown}
          />
          : <EditorSpan onClick={toggleElementEditState}>
            {value}
          </EditorSpan>
      }
    </>
  );
};