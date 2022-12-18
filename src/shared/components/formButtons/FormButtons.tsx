import { Button, ButtonsBlock } from "./styles";
import confirm from "../../../assets/svg/confirm.svg";
import cancel from "../../../assets/svg/delete.svg";

interface IFormButtons {
  onCancel: () => void;
};

export const FormButtons = ({onCancel}: IFormButtons) => {
  return (
    <ButtonsBlock>
      <Button type="submit">
        <img src={confirm} alt="Add" width={25} height={25}/>
      </Button>
      <Button type="button" onClick={onCancel}>
        <img src={cancel} alt="Cancel" width={25} height={25} />
      </Button>
    </ButtonsBlock>
  );
}