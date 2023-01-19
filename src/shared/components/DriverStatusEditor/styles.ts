import styled from "styled-components";
import { getStatusColorsSet } from "../../helpers/themes";

type Props = {
  code: string;
};
export const EditorSpan = styled.span<Props>`
  cursor: pointer;
  width: 20px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${(props) => getStatusColorsSet(props.code)?.color};
  background: ${(props) => getStatusColorsSet(props.code)?.background};
`;
