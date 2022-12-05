import { useRef, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ICarsStatus{
  statusStyle: string;
  status: string;
  onSave: (data: string) => void;
};

export const CarClasses = ({status, statusStyle, onSave}: ICarsStatus) => {
  const [isEdit, setIsEdit] = useState(false);
  const language = useTypedSelector(state => state.language.language.car.statuses)
  const rootEl = useRef<HTMLSelectElement>(null);

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
      setIsEdit(false);
    };    
  };  

  return(
    <>
      {isEdit ?
        <select
          defaultValue={status}
          ref={rootEl}
          onChange={(e) => {
          setIsEdit(false);
          onSave(e.target.value);
        }}>
            <option value='econom'>{language.econom}</option>
            <option value='standart'>{language.standart}</option>
            <option value='bussiness'>{language.bussiness}</option>
            <option value='eco'>{language.eco}</option>
          </select>
        : <span
          onClick={() => {
            setIsEdit(true);
            document.addEventListener('click', onClick);
          }}
          className={statusStyle}>{language[status]}</span>
      }
    </>
  );
};