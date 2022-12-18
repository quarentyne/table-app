export interface ICarsClasses{
  eco: string;
  bussiness: string;
  standart: string;
  econom: string;
  [index: string]: string;
};

export const CARS_CLASSES: ICarsClasses = {
  eco: 'Эко',
  bussiness: 'Бизнесс',
  standart: 'Стандарт',
  econom: 'Эконом',
};