import { useTranslation } from "react-i18next";
import { EditorSpan } from "./styles";

interface ICarsStatusEditor { 
  status: string;
  onClick: () => void;
};

export const CarsStatusEditor = ({status, onClick }: ICarsStatusEditor) => {
  const { t } = useTranslation();
  return (
    <EditorSpan
      code={status}
      onClick={onClick}
    >{t(`car.statuses.${status}`)}
    </EditorSpan>
  );
};