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

export const addCar = (car: string, currentId: number | null) => ({
  type: POST_CAR,
  payload: { car, currentId },
});

export const patchCar = (
  id: number,
  car: string,
  currentId: number | null
) => ({
  type: PATCH_CAR,
  payload: { id, car, currentId },
});

export const deleteCar = (id: number, currentId: number | null) => ({
  payload: { id, currentId },
  type: DELETE_CAR,
});
