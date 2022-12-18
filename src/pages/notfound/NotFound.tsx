import { FlexBlock } from "./styles";
import notfound from "../../assets/images/notfound.png";

export const NotFound = () => {
  return (
    <FlexBlock>
      <img src={notfound} alt='Page not found' />
    </FlexBlock>
  );
};