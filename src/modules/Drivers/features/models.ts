export enum driversActions {
  GET_DRIVERS = "GET_DRIVERS",
  SET_DRIVERS = "SET_DRIVERS",
  ADD_DRIVER = "ADD_DRIVER",
  SET_NEW_DRIVER = "SET_NEW_DRIVER",
  DELETE_DRIVER = "DELETE_DRIVER",
  UPDATE_DRIVER_DATA = "UPDATE_DRIVER_DATA",
  SET_UPDATED_DRIVER_DATA = "SET_UPDATED_DRIVER_DATA",
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

export interface IDriversState {
  isError: boolean | null;
  isLoading: boolean;
  drivers: IDriver[] | null;
}

export interface IDriversServerResponse {
  is_error: boolean;
  data: IDriver[];
}

export interface IDriverServerResponse {
  is_error: boolean;
  data: IDriver;
}

export interface IGetDriversAction {
  type: driversActions.GET_DRIVERS;
}

export interface ISetDriversAction {
  type: driversActions.SET_DRIVERS;
  payload: IDriversServerResponse;
}

export interface IAddDriverAction {
  type: driversActions.ADD_DRIVER;
  driver: string;
}

export interface ISetNewDriverAction {
  type: driversActions.SET_NEW_DRIVER;
  payload: IDriverServerResponse;
}

export interface IUpdateDriverDataAction {
  type: driversActions.UPDATE_DRIVER_DATA;
  driver: string;
  id: number;
}

export interface ISetUpdatedDriverDataAction {
  type: driversActions.SET_UPDATED_DRIVER_DATA;
  payload: IDriverServerResponse;
}

export interface IDeleteDriverAction {
  type: driversActions.DELETE_DRIVER;
  id: number;
}

export type IDriversActions =
  | IGetDriversAction
  | ISetDriversAction
  | IAddDriverAction
  | ISetNewDriverAction
  | IUpdateDriverDataAction
  | ISetUpdatedDriverDataAction
  | IDeleteDriverAction;
