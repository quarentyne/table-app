import styled from "styled-components";

export const CarsTable = styled.ul`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr 1fr 1fr 1fr 0.6fr 1fr 0.8fr;
  justify-items: center;
  gap: 10px;
  text-align: center;
`;

export const CarsTableHeaderItem = styled.li`
  font-weight: 700;
  padding-bottom: 5px;
`;