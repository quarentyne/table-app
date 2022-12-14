import styled from "styled-components";

export const EditorSpan = styled.span`
  cursor: pointer;
`;

export const EditorInput = styled.input`
  text-align: center;
  width: 100%;
  &:focus{
    background-color: rgba(135, 206, 235, 0.4);
  }
`;