import styled from "styled-components";

export const CarsTableInner = styled.ul`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr 1fr 1fr 1fr 0.6fr 1fr 0.8fr;
  justify-items: center;
  gap: 10px;
  text-align: center;
  border-top: 1px solid #EEEEEE;
`;
export const CarsTableInnerItem = styled.li`
  font-weight: 500;
  padding: 15px;
`;