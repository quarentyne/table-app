import styled from "styled-components";
import { screenSizes } from "../../../../shared/helpers/themes";

export const CarsTableInner = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "id name name name name name"
    "model model mark mark year year"
    "plate plate status status action action";
  gap: 2px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  justify-items: center;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (min-width: ${screenSizes.tablet}px) {
    grid-template-areas: "id name mark model plate year status action";
    grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1.3fr 0.7fr 1.2fr 0.6fr;
    gap: 10px;
    border: none;
    border-top: 1px solid #eeeeee;
    margin-bottom: 0;
    box-shadow: none;
  } ;
`;
export const CarsTableInnerItem = styled.li`
  font-weight: 500;
  padding: 15px 0;
  font-size: 15px;
  @media screen and (min-width: ${screenSizes.laptopS}px) {
    font-size: 20px;
  } ;
`;

export const ID = styled(CarsTableInnerItem)`
  grid-area: id;
  font-weight: 700;
`;

export const Name = styled(CarsTableInnerItem)`
  grid-area: name;
`;

export const Mark = styled(CarsTableInnerItem)`
  grid-area: mark;
`;

export const Model = styled(CarsTableInnerItem)`
  grid-area: model;
`;

export const PlateNumber = styled(CarsTableInnerItem)`
  grid-area: plate;
`;

export const Year = styled(CarsTableInnerItem)`
  grid-area: year;
`;

export const Status = styled(CarsTableInnerItem)`
  grid-area: status;
`;

export const Action = styled(CarsTableInnerItem)`
  grid-area: action;
`;
