import {
  DELETE_CAR,
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  ICarsDefaultState,
  UPDATE_CAR,
  ADD_CAR,
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

export const addCar = (car: string, redirectId: number | null) => ({
  type: ADD_CAR,
  car,
  redirectId,
});

export const updateCar = (
  id: number,
  car: string,
  redirectId: number | null
) => ({
  type: UPDATE_CAR,
  id,
  car,
  redirectId,
});

export const deleteCar = (id: number, redirectId: number | null) => ({
  type: DELETE_CAR,
  id,
  redirectId,
});
