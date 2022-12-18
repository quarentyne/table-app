import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const NavbarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 350px;
  align-items: center;
`;

export const NavbarItem = styled.span`
  display: flex;
  align-items: center;
  >img{
    margin-right: 5px;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: ${Colors.basic};
  :hover{
    color: ${Colors.hover};
    opacity: 0.8;
  };
  &.acive{
    color: red;
  };
`;