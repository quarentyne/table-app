import styled from "styled-components";
import { screenSizes } from "../../../../shared/constants/screenSizes";

export const DriversTable = styled.ul`
  display: grid;
  grid-template-columns: 0.3fr 1.5fr 1.3fr;
  grid-template-areas: 
    "id status status"
    "name name birthday"
    "registrated registrated action";

  gap: 2px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  margin-bottom: 15px;
  justify-items: center;  
  text-align: center;  

  @media screen and (min-width: ${screenSizes.tablet}px){
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr 0.8fr;
    grid-template-areas: "id name birthday registrated status action";
    gap: 10px;
    border: none;
    border-top: 1px solid #EEEEEE;
    margin-bottom: 0;
    box-shadow: none;
  };
`;
export const DriversTableInnerItems = styled.li`
  font-weight: 500;
  padding: 15px 0;
  font-size: 15px;
  @media screen and (min-width: ${screenSizes.laptopS}px){
    font-size: 20px;
  };
`;

export const ID = styled(DriversTableInnerItems)`
  grid-area: id;
  font-weight: 700;
`;

export const Name = styled(DriversTableInnerItems)`
  grid-area: name;
`;

export const Birthday = styled(DriversTableInnerItems)`
  grid-area: birthday;
`;

export const Registrated = styled(DriversTableInnerItems)`
  grid-area: registrated;
`;

export const Status = styled(DriversTableInnerItems)`
  grid-area: status;
`;

export const Action = styled(DriversTableInnerItems)`
  grid-area: action;
`;