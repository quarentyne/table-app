import {
  DELETE_CAR,
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  ICarsDefaultState,
  UPDATE_CAR,
  POST_CAR,
  GET_CARS_BY_ID_REQUESTED,
} from "./models";

export const requestCars = () => ({ type: GET_CARS_REQUESTED });

export const requestCarsById = (id: number) => ({
  type: GET_CARS_BY_ID_REQUESTED,
  id,
});

export const responseCars = (data: ICarsDefaultState) => ({
  type: GET_CARS_SUCCESS,
  payload: data,
});

export const addCar = (car: string, redirectID: number | null) => ({
  type: POST_CAR,
  payload: { car, redirectID },
});

export const updateCar = (
  id: number,
  car: string,
  redirectID: number | null
) => ({
  type: UPDATE_CAR,
  payload: { id, car, redirectID },
});

export const deleteCar = (id: number, redirectID: number | null) => ({
  payload: { id, redirectID },
  type: DELETE_CAR,
});
