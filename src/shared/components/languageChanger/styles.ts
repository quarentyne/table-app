import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { screenSizes } from "../../constants/screenSizes";

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
  cursor: pointer;
  color: ${props => props.active ? Colors.hover : Colors.basic};
  :hover{
    color: ${Colors.hover};
  };

  @media screen and (min-width: ${screenSizes.tablet}px){    
    font-weight: 700;
    font-size: 20px;    
  };
`;