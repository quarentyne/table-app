import styled from "styled-components";
import { Colors } from "../../shared/constants/colors";
import { screenSizes } from "../../shared/constants/screenSizes";

type Props = {
  isVisible: boolean;
};

export const CarsHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AddCarButton = styled.button`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.hover};
  padding: 4px 8px;
  background: #F4F5FF;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;

  @media screen and (min-width: ${screenSizes.tablet}px){
    padding: 8px 16px;
  };

  &:hover{
    border: 1px solid ${Colors.hover};
  };
  >img{
    @media screen and (min-width: ${screenSizes.modile}px){
      margin-right: 5px;
      display: block;
    };
    display: none;    
  };
`;

export const FormWrapper = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  display: ${props => props.isVisible ? "block" : "none"};
`;