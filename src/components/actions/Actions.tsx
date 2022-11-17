import eye from "../../assets/eye.svg";
import deleteSVG from "../../assets/delete.svg";
import classes from "./Actions.module.scss";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

interface IActions{
  eyeText: string;
  deleteText: string;
}

export const Actions = (props: IActions): ReactElement => {
  const [isEyeShowHelper, setIsEyeShowHelper] = useState(false);
  const [isDeleteShowHelper, setIsDeleteShowHelper] = useState(false);

  return (
    <ul className={classes.actions}>
      <li className={classes.actions_item}>
        <Link to='/car'>
          <img
            src={eye}
            alt="look"
            width={20}
            height={20}
            onMouseEnter={() => setIsEyeShowHelper(true)}
            onMouseLeave={() => setIsEyeShowHelper(false)}
            />
        </Link>
        <span
          className={classes.actions_helpers}
          style={isEyeShowHelper ? { display: 'block' } : { display: 'none' }}
        >{props.eyeText}</span>
      </li>
      <li className={classes.actions_item}>
        <img
          src={deleteSVG}
          alt="look"
          width={20}
          height={20}
          onMouseEnter={() => setIsDeleteShowHelper(true)}
          onMouseLeave={() => setIsDeleteShowHelper(false)}
          />
        <span
          className={classes.actions_helpers}
          style={isDeleteShowHelper ? { display: 'block' } : { display: 'none' }}
        >{props.deleteText}</span>        
      </li>
    </ul>
  );
};