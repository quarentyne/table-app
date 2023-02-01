export enum driverActions {
  GET_DRIVER = "GET_DRIVER",
  SET_DRIVER = "SET_DRIVER",
  UPDATE_CURRENT_DRIVER_DATA = "UPDATE_CURRENT_DRIVER_DATA",
  SET_UPDATED_CURRENT_DRIVER_DATA = "SET_UPDATED_CURRENT_DRIVER_DATA",
}

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

export interface IDriverState {
  isError: boolean | null;
  driver: IDriver | null;
  isLoading: boolean;
}

export interface IDriverServerResponse {
  is_error: boolean;
  data: IDriver;
}

export interface IGetDriverAction {
  type: driverActions.GET_DRIVER;
  id: string;
}

export interface ISetDriverAction {
  type: driverActions.SET_DRIVER;
  payload: IDriverServerResponse;
}

export interface IUpdateDriverDataAction {
  type: driverActions.UPDATE_CURRENT_DRIVER_DATA;
  driver: string;
  id: number;
}

export interface ISetUpdatedDriverDataAction {
  type: driverActions.SET_UPDATED_CURRENT_DRIVER_DATA;
  payload: IDriverServerResponse;
}

export type IDriverActions =
  | IGetDriverAction
  | ISetDriverAction
  | IUpdateDriverDataAction
  | ISetUpdatedDriverDataAction;
