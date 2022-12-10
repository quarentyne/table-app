import { ReactElement, useRef, useState } from "react";
import classes from './TextDataEditor.module.scss';

interface ITextDataEditor{
  value: string;
  pattern: string;
  onSave: (data: string) => void;
};

export const TextDataEditor = ({ value, pattern, onSave}: ITextDataEditor): ReactElement  => {
  const [isElementEdit, setElementEdit] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const rootEl = useRef<HTMLInputElement>(null);
  const regex = new RegExp(pattern);

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
      setIsSave(true);
    };    
  };  
  
  if (isSave) {
    setIsSave(false);
    if (regex.test(currentValue)) {
      setElementEdit(false);   
      document.removeEventListener('click', onClick);
      if (currentValue !== value) {
        onSave(currentValue);        
      }
    } else {
      rootEl.current?.focus();
    }
  };

  return (
    <>
      {
      isElementEdit
          ? <input
            ref={rootEl}
            autoFocus
            required
            value={currentValue}
            onKeyDown={e => e.key === 'Enter' && currentValue && setIsSave(true)}
            onChange={e => {
              setCurrentValue(e.target.value);
            }}
            className={classes.editedInput} />
          
          : <span
            style={{cursor:"pointer"}}
            onClick={() => {
              setElementEdit(true);
              document.addEventListener('click', onClick);
            }}>{currentValue}</span>
      }
    </>
  );
};
