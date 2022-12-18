export const GET_DRIVERS_SUCCESS = 'GET_DRIVERS_SUCCESS';
export const GET_DRIVERS_REQUESTED = 'GET_DRIVERS_REQUESTED';
export const POST_DRIVER = 'POST_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const PATCH_DRIVER = 'PATCH_DRIVER';

export interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: {
    code: string;
    title: string;
  };
};

export interface IDriversDeafaultState {
  isError: boolean;
  status: string;
  data: IDriver[];
  loading: boolean;
};

export interface IDriverDeafaultState {
  isError: boolean;
  status: string;
  data: IDriver;
  loading: boolean;
};

export interface IDriversActions{
  type: string;
  payload: IDriversDeafaultState;
};