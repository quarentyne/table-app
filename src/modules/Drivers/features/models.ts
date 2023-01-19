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

export interface IDriversDeafaultState {
  is_error: boolean | null;
  status: string | null;
  data: IDriver[] | null;
}

export interface IDriversActions {
  type: string;
  payload: IDriversDeafaultState;
}
