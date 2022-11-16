import { ReactElement, useRef, useState } from "react";
import classes from './EditedData.module.scss';

interface IEditedData{
  value: string;
};


export const EditedData = ({ value }: IEditedData): ReactElement  => {
  const [isElementEdit, setElementEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const rootEl = useRef<HTMLInputElement>(null);

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
    
    if ((onClickPosition.left < elementOnScreen.left) || (onClickPosition.left > (elementOnScreen.left + elementOnScreen.width)) ||
        (onClickPosition.top < elementOnScreen.top) ||(onClickPosition.top > (elementOnScreen.top + elementOnScreen.height))) {
      setElementEdit(false);
    };    
  };

  document.removeEventListener('click', onClick);

  if (isElementEdit) { 
    document.addEventListener('click', onClick);
  }

  return (
    <>
      {
      isElementEdit
        ? <input ref={rootEl} autoFocus value={currentValue} onKeyDown={e => e.key === 'Enter' && setElementEdit(false)}
          onChange={e => setCurrentValue(e.target.value)} className={classes.editedInput} />
        : <span onClick={() => setElementEdit(true)}>{currentValue}</span>
      }
    </>
  );
};
