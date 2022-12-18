import styled from "styled-components";
import { Colors } from "../../constants/colors";

type Props = {
  active: boolean;
};

export const LanguageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageButton = styled.button<Props>`
  background: transparent;
  border: none;
  font-weight: 700;
  color: ${props => props.active ? Colors.hover : Colors.basic};
  :hover{
    color: ${Colors.hover};
  };
  cursor: pointer;
`;