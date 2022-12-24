interface ICode{
  color: string;
  background: string;
}

interface IStatusColors{
  fired: ICode;
  not_active: ICode;
  blocked: ICode;
  active: ICode;
  econom: ICode;
  standart: ICode;
  bussiness: ICode;
  eco: ICode;
  [index: string]: ICode;
};

export const STATUSES: IStatusColors = {
  fired: {
    color: '#D09700',
    background: "#FEF8E8",
  },
  not_active: {
    color: "#292D45",
    background: "#DFE0E4",
  },
  blocked: {
    color: "#F11212",
    background: "#FDEBEB",
  },
  active: {
    color: "#26C124",
    background: "#EBF9EB",
  },
  econom: {
    color: '#c1b124',
    background: "#f8f9eb",
  },
  standart: {
    color: "#1500d0",
    background: "#ebe8fe",
  },
  bussiness: {
    color: "#852292",
    background: "#e1d5e9",
  },
  eco: {
    color: "#26C124",
    background: "#EBF9EB",
  },
};