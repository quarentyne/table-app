import styled from "styled-components";

export const CarsTableInner = styled.ul`
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1.3fr 0.7fr 1.2fr 0.6fr;
  justify-items: center;
  gap: 10px;
  text-align: center;
  border-top: 1px solid #EEEEEE;
`;
export const CarsTableInnerItem = styled.li`
  font-weight: 500;
  padding: 15px 0;
`;