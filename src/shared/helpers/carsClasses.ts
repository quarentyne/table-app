import { TFunction } from "i18next";

export enum carsStatusTitles {
  ECO = "Эко",
  BUSINESS = "Бизнесс",
  STANDARD = "Стандарт",
  ECONOMY = "Эконом",
}

export enum carsStatusCodes {
  ECO = "eco",
  BUSINESS = "bussiness",
  STANDARD = "standart",
  ECONOMY = "econom",
}

export const mappedCarsStatusCodes = [
  carsStatusCodes.ECO,
  carsStatusCodes.BUSINESS,
  carsStatusCodes.STANDARD,
  carsStatusCodes.ECONOMY,
];

export const getCarsStatusesOptionsParams = (t: TFunction) =>
  mappedCarsStatusCodes.map((item) => ({
    translation: t(`car.statuses.${item}`),
    value: item,
  }));

export const carsClassesTitleSelector = (code: string) => {
  switch (code) {
    case carsStatusCodes.ECO:
      return carsStatusTitles.ECO;
    case carsStatusCodes.BUSINESS:
      return carsStatusTitles.BUSINESS;
    case carsStatusCodes.ECONOMY:
      return carsStatusTitles.ECONOMY;
    case carsStatusCodes.STANDARD:
      return carsStatusTitles.STANDARD;
    default:
      return;
  }
};

export const carsClassesCodeSelector = (code: string) => {
  switch (code) {
    case carsStatusCodes.ECO:
      return carsStatusCodes.ECO;
    case carsStatusCodes.BUSINESS:
      return carsStatusCodes.BUSINESS;
    case carsStatusCodes.ECONOMY:
      return carsStatusCodes.ECONOMY;
    case carsStatusCodes.STANDARD:
      return carsStatusCodes.STANDARD;
    default:
      return carsStatusCodes.STANDARD;
  }
};
