import { useTranslation } from "react-i18next";
import { DriversTable, DriversHeaderTableItems } from "./styles";

export const DriversTableHeader = () => { 
  const { t } = useTranslation();

  return (
    <DriversTable>
      <DriversHeaderTableItems>ID</DriversHeaderTableItems>
      <DriversHeaderTableItems>{t("driver.name")}</DriversHeaderTableItems>
      <DriversHeaderTableItems>{t("driver.born")}</DriversHeaderTableItems>
      <DriversHeaderTableItems>{t("driver.registered")}</DriversHeaderTableItems>
      <DriversHeaderTableItems>{t("driver.status")}</DriversHeaderTableItems>
      <DriversHeaderTableItems>{t("driver.actions")}</DriversHeaderTableItems>
    </DriversTable>
  );
};