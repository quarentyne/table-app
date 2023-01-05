import { Link } from "react-router-dom";
import { ActionsItem, ActionsList } from "./styles";
import eye from "../../../assets/svg/eye.svg"
import del from "../../../assets/svg/delete.svg"

interface IActions{
  eyeText: string;
  deleteText: string;
  onDelete: () => void;
  linkTo: string;
  state?: number;
};

export const Actions = ({eyeText, deleteText, linkTo, state, onDelete} :IActions) => {
  return (
    <ActionsList>
      <ActionsItem>
        <Link to={linkTo} state={state}>
          <img
            src={eye}
            alt="look"
            width={20}
            height={20}
            title={eyeText}
          />
        </Link>
      </ActionsItem>
      <ActionsItem>
        <img
          src={del}
          alt="delete"
          width={20}
          height={20}
          title={deleteText}
          onClick={onDelete}
        />
      </ActionsItem>
    </ActionsList>
  );
};