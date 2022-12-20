import { useTranslation } from "react-i18next";
import { EditorSpan } from "./styles";

interface IDriversStatusEditor { 
  status: string;
  onClick: () => void;
};

export const DriversStatusEditor = ({status, onClick }: IDriversStatusEditor) => {
  const { t } = useTranslation();
  return (
    <EditorSpan
      code={status}
      onClick={onClick}
    >{t(`driver.statuses.${status}`)}
    </EditorSpan>
  );
};