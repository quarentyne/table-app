import styled from "styled-components";

export const DriversTable = styled.ul`
  display: grid;
  grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr 0.8fr;
  justify-items: center;
  gap: 10px;
  padding-bottom: 5px;
`;

export const DriversHeaderTableItems = styled.li`
  font-weight: 700;
`;

export const DriversTableInnerItems = styled.li`
  font-weight: 500;
  margin-top: 20px;
`;