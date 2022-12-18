import styled from "styled-components";
import { Colors } from "../../shared/constants/colors";

type Props = {
  isVisible: boolean;
}

export const DriversHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AddDriverButton = styled.button`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.hover};
  padding: 8px 16px;
  background: #F4F5FF;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover{
    border: 1px solid ${Colors.hover};
  };
  >img{
    margin-right: 5px;
  };
`;

export const FormWrapper = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  display: ${props => props.isVisible ? "block" : "none"};
`;