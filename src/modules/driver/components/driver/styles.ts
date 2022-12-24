import styled from "styled-components";

export const DriversTable = styled.ul`
  display: grid;
  grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr 0.8fr;
  justify-items: center;
  gap: 10px;
  text-align: center;
  border-top: 1px solid #EEEEEE;
`;
export const DriversTableInnerItems = styled.li`
  font-weight: 500;
  padding: 15px 0;
`;