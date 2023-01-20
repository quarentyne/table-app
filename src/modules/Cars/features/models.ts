export const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";
export const GET_CARS_REQUESTED = "GET_CARS_REQUESTED";
export const GET_CARS_BY_ID_REQUESTED = "GET_CARS_BY_ID_REQUESTED";
export const ADD_CAR = "ADD_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const DELETE_CAR = "DELETE_CAR";

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

export interface ICarsDefaultState {
  is_error: boolean | null;
  status: string | null;
  data: ICar[] | null;
}

export interface ICarsActions {
  type: string;
  payload: ICarsDefaultState;
}