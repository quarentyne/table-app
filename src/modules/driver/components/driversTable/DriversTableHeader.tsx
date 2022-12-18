import { useTranslation } from "react-i18next";
import { DriversTable, DriversTableHeaderItems } from "./styles";

export const DriversTableHeader = () => { 
  const { t } = useTranslation();

  return (
    <DriversTable>
      <DriversTableHeaderItems>ID</DriversTableHeaderItems>
      <DriversTableHeaderItems>{t("driver.name")}</DriversTableHeaderItems>
      <DriversTableHeaderItems>{t("driver.born")}</DriversTableHeaderItems>
      <DriversTableHeaderItems>{t("driver.registered")}</DriversTableHeaderItems>
      <DriversTableHeaderItems>{t("driver.status")}</DriversTableHeaderItems>
      <DriversTableHeaderItems>{t("driver.actions")}</DriversTableHeaderItems>
    </DriversTable>
  );
};