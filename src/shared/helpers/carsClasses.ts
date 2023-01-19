import { TFunction } from "i18next";

export enum carsStatusTitles {
  ECO = "Эко",
  BUSINESS = "Бизнесс",
  STANDART = "Стандарт",
  ECONOM = "Эконом",
}

export enum carsStatusCodes {
  ECO = "eco",
  BUSINESS = "bussiness",
  STANDART = "standart",
  ECONOM = "econom",
}

export const mappedCarsStatusCodes = [
  carsStatusCodes.ECO,
  carsStatusCodes.BUSINESS,
  carsStatusCodes.STANDART,
  carsStatusCodes.ECONOM,
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
    case carsStatusCodes.ECONOM:
      return carsStatusTitles.ECONOM;
    case carsStatusCodes.STANDART:
      return carsStatusTitles.STANDART;
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
    case carsStatusCodes.ECONOM:
      return carsStatusCodes.ECONOM;
    case carsStatusCodes.STANDART:
      return carsStatusCodes.STANDART;
    default:
      return carsStatusCodes.STANDART;
  }
};
