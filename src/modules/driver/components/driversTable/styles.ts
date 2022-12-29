import styled from "styled-components";
import { screenSizes } from "../../../../shared/constants/screenSizes";

export const DriversTable = styled.ul`
  display: none;
  @media screen and (min-width: ${screenSizes.tablet}px){
    display: grid;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr 0.8fr;
    justify-items: center;
    gap: 10px;
    text-align: center;
    align-items: center;
  }
`;

export const DriversHeaderTableItems = styled.li`
  font-weight: 700;
  padding-bottom: 5px;
  font-size: 15px;
  @media screen and (min-width: ${screenSizes.laptopS}px){
    font-size: 20px;
  };
`;