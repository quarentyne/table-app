import { Link } from "react-router-dom";
import { ActionsItem, ActionsList } from "./styles";
import eye from "../../../assets/svg/eye.svg"
import del from "../../../assets/svg/delete.svg"

interface IActions{
  eyeHint: string;
  deleteHint: string;
  onDelete: () => void;
  linkTo: string;
};

export const ActionButtons = ({eyeHint, deleteHint, linkTo, onDelete} :IActions) => {
  return (
    <ActionsList>
      <ActionsItem>
        <Link to={linkTo}>
          <img
            src={eye}
            alt="look"
            width={20}
            height={20}
            title={eyeHint}
          />
        </Link>
      </ActionsItem>
      <ActionsItem>
        <img
          src={del}
          alt="delete"
          width={20}
          height={20}
          title={deleteHint}
          onClick={onDelete}
        />
      </ActionsItem>
    </ActionsList>
  );
};