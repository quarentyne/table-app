import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BaseColors, ScreenSizes } from "../../helpers/themes";

export const NavbarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  @media screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 170px;
  }
  @media screen and (min-width: ${ScreenSizes.TABLET}px) {
    width: 350px;
  } ;
`;

export const NavbarItem = styled.span`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

export const NavbarLink = styled(NavLink)`
  color: ${BaseColors.BASIC};
  :hover {
    color: ${BaseColors.HOVER};
    opacity: 0.8;
  }
  &.active {
    color: ${BaseColors.HOVER};
  }
`;
