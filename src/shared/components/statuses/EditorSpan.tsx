import { useTranslation } from "react-i18next";
import { DRIVER_STATUSES } from "../../constants/driverStatuses";
import { EditorSpan } from "./styles";

interface IStatusEditorSpan { 
  status: string;
  onClick: () => void;
};

export const StatusEditorSpan = ({status, onClick }: IStatusEditorSpan) => {
  const { t } = useTranslation();
  return (
    <EditorSpan
      code={status}
      onClick={onClick}
    >{DRIVER_STATUSES.hasOwnProperty(status)
      ? t(`driver.statuses.${status}`)
      : t(`car.statuses.${status}`)}
    </EditorSpan>
  );
};