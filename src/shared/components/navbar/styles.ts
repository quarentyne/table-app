import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { baseColors, screenSizes } from "../../helpers/themes";

export const NavbarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  @media screen and (min-width: ${screenSizes.modile}px) {
    width: 170px;
  }
  @media screen and (min-width: ${screenSizes.tablet}px) {
    width: 350px;
  } ;
`;

export const NavbarItem = styled.span`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

export const NavbarLink = styled(NavLink)`
  color: ${baseColors.basic};
  :hover {
    color: ${baseColors.hover};
    opacity: 0.8;
  }
  &.active {
    color: ${baseColors.hover};
  }
`;
