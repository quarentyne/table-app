import styled from "styled-components";

export const CarsTable = styled.ul`
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1.2fr 0.7fr 1.2fr 0.6fr;
  justify-items: center;
  gap: 10px;
  align-items: center;
  text-align: center;
`;

export const CarsTableHeaderItem = styled.li`
  font-weight: 700;
  padding-bottom: 5px;
`;