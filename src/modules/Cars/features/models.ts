export enum carsActions {
  SET_CARS = "SET_CARS",
  GET_CARS = "GET_CARS",
  ADD_CAR = "ADD_CAR",
  SET_NEW_CAR = "SET_NEW_CAR",
  UPDATE_CAR = "UPDATE_CAR",
  SET_UPDATED_CAR_DATA = "SET_UPDATED_CAR_DATA",
  DELETE_CAR = "DELETE_CAR",
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

export interface IGetCarsAction {
  type: carsActions.GET_CARS;
}

export interface ISetCarsAction {
  type: carsActions.SET_CARS;
  payload: ICarsServerResponse;
}

export interface IDeleteCarAction {
  type: carsActions.DELETE_CAR;
  id: string;
}

export interface IAddCarAction {
  type: carsActions.ADD_CAR;
  car: string;
}

export interface IAddCarActionSuccessful {
  type: carsActions.SET_NEW_CAR;
  payload: ICarServerResponse;
}

export interface IUpdateCarAction {
  type: carsActions.UPDATE_CAR;
  car: string;
  id: string;
}

export interface IUpdateCarActionSuccessful {
  type: carsActions.SET_UPDATED_CAR_DATA;
  payload: ICarServerResponse;
}

export type TCarsActions =
  | ISetCarsAction
  | IGetCarsAction
  | IDeleteCarAction
  | IAddCarActionSuccessful
  | IUpdateCarActionSuccessful;
