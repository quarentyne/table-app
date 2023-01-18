import {
  DELETE_CAR,
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  ICarsDeafaultState,
  PATCH_CAR,
  POST_CAR,
} from "./models";

export const requestCars = (id?: number) => ({ type: GET_CARS_REQUESTED, id });

export const responseCars = (data: ICarsDeafaultState) => ({
  type: GET_CARS_SUCCESS,
  payload: data,
});

export const addCar = (car: string, redirectID: number | null) => ({
  type: POST_CAR,
  payload: { car, redirectID },
});

export const patchCar = (
  id: number,
  car: string,
  redirectID: number | null
) => ({
  type: PATCH_CAR,
  payload: { id, car, redirectID },
});

export const deleteCar = (id: number, redirectID: number | null) => ({
  payload: { id, redirectID },
  type: DELETE_CAR,
});
