import { useTranslation } from "react-i18next";
import { DRIVER_STATUSES } from "../../../constants/driverStatuses";

export const DriversStatuses = () => {
  const { t } = useTranslation();
  const statuses = Object.keys(DRIVER_STATUSES);

  return (
    <>
      {statuses.map(status => <option value={status}>{t(`driver.statuses.${status}`)}</option>)}
    </>
  );
};