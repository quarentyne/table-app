import styled from "styled-components";
import { BaseColors, ScreenSizes } from "../../helpers/themes";

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
  color: ${(props) => (props.active ? BaseColors.HOVER : BaseColors.BASIC)};
  :hover {
    color: ${BaseColors.HOVER};
  }

  @media screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-weight: 700;
    font-size: 20px;
  } ;
`;
