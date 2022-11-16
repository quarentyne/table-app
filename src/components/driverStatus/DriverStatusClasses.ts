import classes from './DriverStatus.module.scss';

interface IDriverClassesByStatus{
  active: string;
  blocked: string;
  fired: string;
  not_active: string;
  [index: string]: string;
}

export const driverClassesByStatus: IDriverClassesByStatus = {
  active: classes.preview__active,
  blocked: classes.preview__blocked,
  fired: classes.preview__fired,
  not_active: classes.preview__not_active,
};