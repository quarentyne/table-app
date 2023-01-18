export const GET_DRIVERS_SUCCESS = "GET_DRIVERS_SUCCESS";
export const GET_DRIVERS_REQUESTED = "GET_DRIVERS_REQUESTED";
export const GET_DRIVER_BY_ID_REQUESTED = "GET_DRIVER_BY_ID_REQUESTED";
export const POST_DRIVER = "POST_DRIVER";
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

export interface IDriversDeafaultState {
  is_error: boolean | null;
  status: string | null;
  data: IDriver[] | null;
}

export interface IDriverResponse {
  is_error: boolean;
  status: string;
  data: IDriver;
  loading: boolean;
}

export interface IDriversActions {
  type: string;
  payload: IDriversDeafaultState;
}
