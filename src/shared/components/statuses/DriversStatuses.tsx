import { useTranslation } from "react-i18next";

export const DriversStatuses = () => {
  const { t } = useTranslation();

  return (
    <>
      <option value='active'>{t("driver.statuses.active")}</option>
      <option value='blocked'>{t("driver.statuses.blocked")}</option>
      <option value='fired'>{t("driver.statuses.fired")}</option>
      <option value='not_active'>{t("driver.statuses.not_active")}</option>
    </>
  );
};