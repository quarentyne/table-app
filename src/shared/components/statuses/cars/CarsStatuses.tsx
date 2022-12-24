import { useTranslation } from "react-i18next";
import { CARS_CLASSES } from "../../../constants/carsClasses";

export const CarsStatuses = () => {
  const { t } = useTranslation();
  const statuses = Object.keys(CARS_CLASSES);

  return (
    <>
      {statuses.map((status, i) => <option key={i} value={status}>{t(`car.statuses.${status}`)}</option>)}
    </>
  );
};