import { Link } from "react-router-dom";
import { ActionsItem, ActionsList } from "./styled";
import eye from "../../../assets/svg/eye.svg"
import del from "../../../assets/svg/delete.svg"

interface IActions{
  eyeText: string;
  deleteText: string;
  onDelete: () => void;
  linkTo: string;
  state?: number;
}

export const Actions = (props: IActions) => {
  <ActionsList>
    <ActionsItem>
      <Link to={props.linkTo} state={props.state}>
        <img
            src={eye}
            alt="look"
            width={20}
            height={20}
            title={props.eyeText}
            />
      </Link>
      <Link to={props.linkTo} state={props.state}>
        <img
            src={del}
            alt="look"
            width={20}
            height={20}
            title={props.deleteText}
            />
      </Link>
    </ActionsItem>
  </ActionsList>
}