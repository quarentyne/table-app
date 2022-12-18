import styled from "styled-components";

export const HomepageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HomepageWrapper = styled.div`
  border: solid 1px gray;
  padding: 1px 15px 15px;
  border-radius: 15px;
  margin-top: 20px;
  width: 280px;
`;

export const HomepageLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: rgba(78, 78, 78, 0.8);
`;

export const DataBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataObject = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const DataImage = styled.div`
  border: solid 1px rgb(203, 236, 255);
  border-radius: 50%;
  padding: 5px;
  background-color: rgb(203, 236, 255);
`;