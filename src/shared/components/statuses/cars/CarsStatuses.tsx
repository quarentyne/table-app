import { useTranslation } from "react-i18next";
import { mappedCarsStatusCodes } from "../../../../helpers/carsClasses";

export const CarsStatuses = () => {
  const { t } = useTranslation();

  return (
    <>
      {mappedCarsStatusCodes.map((status, i) => <option key={i} value={status}>{t(`car.statuses.${status}`)}</option>)}
    </>
  );
};