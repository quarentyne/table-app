import classes from './CarClasses.module.scss';

interface ICarClasses{
  econom: string;
  standart: string;
  bussiness: string;
  eco: string;
  [index: string]: string;
}

export const carClassesByClass: ICarClasses = {
  econom: classes.preview__econom,
  standart: classes.preview__standart,
  bussiness: classes.preview__bussiness,
  eco: classes.preview__eco,
};