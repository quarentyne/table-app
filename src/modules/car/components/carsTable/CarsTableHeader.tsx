import { useTranslation } from "react-i18next";
import { CarsTable, CarsTableHeaderItem } from "./styles";

export const CarsTableHeader = () => { 
  const { t } = useTranslation();

  return (
    <CarsTable>
      <CarsTableHeaderItem>ID</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.name")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.mark")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.model")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.number")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.year")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.status")}</CarsTableHeaderItem>
      <CarsTableHeaderItem>{t("car.actions")}</CarsTableHeaderItem>
    </CarsTable>
  );  
};