export enum ScreenSizes {
  MOBILE = 375,
  TABLET = 768,
  LAPTOP_S = 1024,
}

export enum Languages {
  UA = "ua",
  EN = "en",
}

export enum BaseColors {
  BASIC = "#292D45",
  HOVER = "#737DF9",
}

enum StatusColors {
  FIRED = "fired",
  NOT_ACTIVE = "not_active",
  BLOCKED = "blocked",
  ACTIVE = "active",
  ECONOMY = "econom",
  ECO = "eco",
  STANDARD = "standart",
  BUSINESS = "bussiness",
}

export const getStatusColorsSet = (status: string) => {
  switch (status) {
    case StatusColors.FIRED:
      return { color: "#D09700", background: "#FEF8E8" };
    case StatusColors.ACTIVE:
      return { color: "#26C124", background: "#EBF9EB" };
    case StatusColors.BLOCKED:
      return { color: "#F11212", background: "#FDEBEB" };
    case StatusColors.NOT_ACTIVE:
      return { color: "#292D45", background: "#DFE0E4" };
    case StatusColors.ECO:
      return { color: "#26C124", background: "#EBF9EB" };
    case StatusColors.ECONOMY:
      return { color: "#c1b124", background: "#f8f9eb" };
    case StatusColors.BUSINESS:
      return { color: "#852292", background: "#e1d5e9" };
    case StatusColors.STANDARD:
      return { color: "#1500d0", background: "#ebe8fe" };
    default:
      return;
  }
};
