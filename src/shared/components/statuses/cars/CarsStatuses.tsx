import { useTranslation } from "react-i18next";

export const CarsStatuses = () => {
  const { t } = useTranslation();

  return (
    <>
      <option value='econom'>{t("car.statuses.econom")}</option>
      <option value='standart'>{t("car.statuses.standart")}</option>
      <option value='bussiness'>{t("car.statuses.bussiness")}</option>
      <option value='eco'>{t("car.statuses.eco")}</option>
    </>
  );
};