export const screenSizes = {
  modile: 375,
  tablet: 768,
  laptopS: 1024,
};

export enum baseColors {
  basic = "#292D45",
  hover = "#737DF9",
}

enum statusColors {
  FIRED = "fired",
  NOT_ACTIVE = "not_active",
  BLOCKED = "blocked",
  ACTIVE = "active",
  ECOMOM = "econom",
  ECO = "eco",
  STANDART = "standart",
  BUSSINESS = "bussiness",
}

export const getStatusColorsSet = (status: string) => {
  switch (status) {
    case statusColors.FIRED:
      return { color: "#D09700", background: "#FEF8E8" };
    case statusColors.ACTIVE:
      return { color: "#26C124", background: "#EBF9EB" };
    case statusColors.BLOCKED:
      return { color: "#F11212", background: "#FDEBEB" };
    case statusColors.NOT_ACTIVE:
      return { color: "#292D45", background: "#DFE0E4" };
    case statusColors.ECO:
      return { color: "#26C124", background: "#EBF9EB" };
    case statusColors.ECOMOM:
      return { color: "#c1b124", background: "#f8f9eb" };
    case statusColors.BUSSINESS:
      return { color: "#852292", background: "#e1d5e9" };
    case statusColors.STANDART:
      return { color: "#1500d0", background: "#ebe8fe" };
    default:
      return;
  }
};
