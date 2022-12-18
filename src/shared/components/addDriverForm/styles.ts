import styled from "styled-components";

export const AddForm = styled.form`
  background-color: rgb(234, 220, 247);
  padding: 20px;
  border-radius: 5%;
  position: absolute;
  left: calc(50% - calc(500px/2));
  top:calc(50% - calc(350px/2));
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: space-between;
  
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