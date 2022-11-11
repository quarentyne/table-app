import { ReactElement, useEffect, useRef, useState } from "react";

interface IDriverName{
  firstName: string;
  lastName: string;
}

export const DriverName = ({ firstName, lastName }: IDriverName): ReactElement => {
  
  const [isNameEdit, setNameEdit] = useState(false);
  const [name, setName] = useState(firstName);

  const rootEl = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   // rootEl.current?.contains(e.target) || console.log('клик вне компонента');
  //   const onClick = (e: MouseEvent) => console.log(e.target);
  //   document.addEventListener('click', onClick);
  //   return () => document.removeEventListener('click', onClick);
  // },[]);

  return (
    <div>
      {isNameEdit
        ? <input ref={rootEl} autoFocus value={name} onKeyDown={e => e.key === 'Enter' && setNameEdit(false)} onChange={e => setName(e.target.value)} />
        : <p onClick={() => setNameEdit(true)}>{name}</p>
      }
      <p>{lastName}</p>
    </div>
  );
};