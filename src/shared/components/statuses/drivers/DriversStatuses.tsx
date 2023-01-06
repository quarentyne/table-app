import { useTranslation } from "react-i18next";
import { mappedDriverStatusCodes } from "../../../helpers/driversStatuses";

export const DriversStatuses = () => {
  const { t } = useTranslation();

  return (
    <>
      {mappedDriverStatusCodes.map((status, i) => <option key={i} value={status}>{t(`driver.statuses.${status}`)}</option>)}
    </>
  );
};