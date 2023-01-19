import { TFunction } from "i18next";

export enum driverStatusTitles {
  ACTIVE = "Активный",
  FIRED = "Уволенный",
  NOT_ACTIVE = "Не активный",
  BLOCKED = "Заблокирован",
}

export enum driverStatusCodes {
  ACTIVE = "active",
  FIRED = "fired",
  NOT_ACTIVE = "not_active",
  BLOCKED = "blocked",
}

export const mappedDriverStatusCodes = [
  driverStatusCodes.ACTIVE,
  driverStatusCodes.FIRED,
  driverStatusCodes.NOT_ACTIVE,
  driverStatusCodes.BLOCKED,
];

export const getDriversStatusesOptionsParams = (t: TFunction) =>
  mappedDriverStatusCodes.map((item) => ({
    translation: t(`driver.statuses.${item}`),
    value: item,
  }));

export const driverStatusTitleSelector = (status: string) => {
  switch (status) {
    case driverStatusCodes.ACTIVE:
      return driverStatusTitles.ACTIVE;
    case driverStatusCodes.FIRED:
      return driverStatusTitles.FIRED;
    case driverStatusCodes.NOT_ACTIVE:
      return driverStatusTitles.NOT_ACTIVE;
    case driverStatusCodes.BLOCKED:
      return driverStatusTitles.BLOCKED;
    default:
      return;
  }
};

export const driverStatusCodeSelector = (status: string) => {
  switch (status) {
    case driverStatusCodes.ACTIVE:
      return driverStatusCodes.ACTIVE;
    case driverStatusCodes.FIRED:
      return driverStatusCodes.FIRED;
    case driverStatusCodes.NOT_ACTIVE:
      return driverStatusCodes.NOT_ACTIVE;
    case driverStatusCodes.BLOCKED:
      return driverStatusCodes.BLOCKED;
    default:
      return driverStatusCodes.ACTIVE;
  }
};
