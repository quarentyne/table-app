import styled from "styled-components";
import { STATUSES } from "../../constants/statusColors";

type Props = {
  code: string;
};
export const EditorSpan = styled.span<Props>`
  cursor: pointer;
  width: 120px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${props => STATUSES[props.code].color};
  background: ${props => STATUSES[props.code].background};
`;