import styled from "styled-components";

type Props = {
  code: string;
};

interface ICode{
  color: string;
  background: string;
};

interface ICarsColors{
  econom: ICode;
  standart: ICode;
  bussiness: ICode;
  eco: ICode;
  [index: string]: ICode;
};

const carsColors: ICarsColors = {
  econom: {
    color: '#c1b124',
    background: "#f8f9eb",
  },
  standart: {
    color: "#1500d0",
    background: "#ebe8fe",
  },
  bussiness: {
    color: "#852292",
    background: "#e1d5e9",
  },
  eco: {
    color: "#26C124",
    background: "#EBF9EB",
  },
};

export const EditorSpan = styled.span<Props>`
  cursor: pointer;
  width: 120px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${props => carsColors[props.code].color};
  background: ${props => carsColors[props.code].background};
`;