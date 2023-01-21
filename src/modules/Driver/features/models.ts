export const GET_DRIVER_SUCCESS = "GET_DRIVER_SUCCESS";
export const GET_DRIVER_REQUESTED = "GET_DRIVER_REQUESTED";
export const ADD_DRIVER = "ADD_DRIVER";
export const DELETE_DRIVER = "DELETE_DRIVER";
export const UPDATE_DRIVER = "UPDATE_DRIVER";

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
}

export interface IDriverDefaultState {
  is_error: boolean | null;
  status: string | null;
  data: IDriver | null;
}

export interface IDriverActions {
  type: string;
  payload: IDriverDefaultState;
}
