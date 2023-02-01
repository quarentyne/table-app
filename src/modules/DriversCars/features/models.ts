export const GET_DRIVERS_CARS = "GET_DRIVERS_CARS";
export const SET_DRIVERS_CARS = "SET_DRIVERS_CARS";
export enum driversCarsActions {
  GET_DRIVERS_CARS = "GET_DRIVERS_CARS",
  SET_DRIVERS_CARS = "SET_DRIVERS_CARS",
  ADD_DRIVERS_CAR = "ADD_DRIVERS_CAR",
  SET_NEW_DRIVERS_CAR = "SET_NEW_DRIVERS_CAR",
  UPDATE_DRIVERS_CAR = "UPDATE_DRIVERS_CAR",
  SET_UPDATED_DRIVERS_CAR_DATA = "SET_UPDATED_DRIVERS_CAR_DATA",
  DELETE_DRIVERS_CAR = "DELETE_DRIVERS_CAR",
}

interface ICar {
  id: string;
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: {
    title: string;
    code: string;
  };
}

export interface ICarsState {
  isError: boolean | null;
  isLoading: boolean;
  cars: ICar[] | null;
}

export interface ICarsServerResponse {
  data: ICar[];
  is_error: boolean;
}

export interface ICarServerResponse {
  data: ICar;
  is_error: boolean;
}

export interface IGetDriversCarsAction {
  type: driversCarsActions.GET_DRIVERS_CARS;
  id: string;
}

export interface ISetDriversCarsAction {
  type: driversCarsActions.SET_DRIVERS_CARS;
  payload: ICarsServerResponse;
}

export interface IDeleteDriversCarAction {
  type: driversCarsActions.DELETE_DRIVERS_CAR;
  id: string;
}

export interface IAddDriversCarAction {
  type: driversCarsActions.ADD_DRIVERS_CAR;
  car: string;
}

export interface ISetNewDriversCarAction {
  type: driversCarsActions.SET_NEW_DRIVERS_CAR;
  payload: ICarServerResponse;
}

export interface IUpdateDriversCarAction {
  type: driversCarsActions.UPDATE_DRIVERS_CAR;
  car: string;
  id: string;
}

export interface ISetUpdatedDriversCarDataAction {
  type: driversCarsActions.SET_UPDATED_DRIVERS_CAR_DATA;
  payload: ICarServerResponse;
}

export type TDriversCarsActions =
  | IGetDriversCarsAction
  | ISetDriversCarsAction
  | IDeleteDriversCarAction
  | ISetNewDriversCarAction
  | ISetUpdatedDriversCarDataAction;
