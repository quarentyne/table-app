export interface IStatuses{
  active: string;
  fired: string;
  not_active: string;
  blocked: string;
  [index: string]: string;
};

export const DRIVER_STATUSES: IStatuses = {
  active: 'Активный',
  fired: 'Уволенный',
  not_active: 'Не активный',
  blocked: 'Заблокирован',
};