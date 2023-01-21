export const GET_DRIVERS_SUCCESS = "GET_DRIVERS_SUCCESS";
export const GET_DRIVERS_REQUESTED = "GET_DRIVERS_REQUESTED";

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

export interface IDriversDefaultState {
  isError: boolean | null;
  isLoading: boolean;
  drivers: IDriver[] | null;
}

export interface IDriversServerResponse {
  is_error: boolean;
  data: IDriver[];
}

export interface IDriversActions {
  type: string;
  payload: IDriversServerResponse;
}
