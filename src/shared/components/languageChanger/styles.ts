import styled from "styled-components";
import { baseColors, screenSizes } from "../../helpers/themes";

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
  color: ${(props) => (props.active ? baseColors.hover : baseColors.basic)};
  :hover {
    color: ${baseColors.hover};
  }

  @media screen and (min-width: ${screenSizes.tablet}px) {
    font-weight: 700;
    font-size: 20px;
  } ;
`;
