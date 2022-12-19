import styled from "styled-components";

type Props = {
  code: string;
};

interface ICode{
  color: string;
  background: string;
}

interface IDriversColors{
  fired: ICode;
  not_active: ICode;
  blocked: ICode;
  active: ICode;
  [index: string]: ICode;
};

const driversColors: IDriversColors = {
  fired: {
    color: '#D09700',
    background: "#FEF8E8",
  },
  not_active: {
    color: "#292D45",
    background: "#DFE0E4",
  },
  blocked: {
    color: "#F11212",
    background: "#FDEBEB",
  },
  active: {
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
  color: ${props => driversColors[props.code].color};
  background: ${props => driversColors[props.code].background};
`;