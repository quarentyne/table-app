import styled from "styled-components";
import { screenSizes } from "../../../../shared/helpers/themes";

export const AddForm = styled.form`
  background-color: rgb(234, 220, 247);
  padding: 20px;
  border-radius: 5%;
  position: absolute;
  max-height: 100vh;
  left: calc(50% - calc(90vw / 2));
  top: calc(50% - calc(415px / 2));
  display: flex;
  flex-direction: column;
  width: 90vw;
  justify-content: space-between;
  @media screen and (min-width: ${screenSizes.tablet}px) {
    left: calc(50% - calc(500px / 2));
    width: 500px;
  } ;
`;

export const FormInput = styled.input`
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 50px;
  border: none;
`;

export const FormLabel = styled.label`
  margin: 10px 0;
  text-align: center;
`;

export const FormSelect = styled.select`
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 10px 5px;
`;
