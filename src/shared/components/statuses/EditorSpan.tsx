import { useTranslation } from "react-i18next";
// import { mappedCarsStatusCodes } from "../../helpers/carsClasses";
import { EditorSpan } from "./styles";

interface IStatusEditorSpan { 
  status: string;
  entity: string;
  onClick: () => void;
};

export const StatusEditorSpan = ({status, onClick, entity }: IStatusEditorSpan) => {
  const { t } = useTranslation();
  return (
    <EditorSpan
      code={status}
      onClick={onClick}
    >
      {t(`${entity}.statuses.${status}`)}
    </EditorSpan>
  );
};