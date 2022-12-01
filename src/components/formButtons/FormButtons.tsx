import cancel from '../../assets/delete.svg';
import confirm from '../../assets/confirm.svg';
import classes from './FormButtons.module.scss';
import { ReactElement } from 'react';

interface IFormButtons{
  onCancel: () => void;
  onConfirm?: () => void;
}

export const FormButtons = ({onCancel, onConfirm}: IFormButtons): ReactElement => {
  return (
    <div className={classes.form_buttons}>
        <button type="button" onClick={onConfirm}>
          <img src={confirm} alt="Add" width={25} height={25} />
        </button>
        <button type="button" onClick={onCancel}>
          <img src={cancel} alt="Cancel" width={25} height={25} />
        </button>
      </div>
  );
};