import {
  DELETE_CAR,
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  UPDATE_CAR,
  ADD_CAR,
  ICarsServerResponse,
} from "./models";

export const requestCars = () => ({ type: GET_CARS_REQUESTED });

export const responseCars = (data: ICarsServerResponse) => ({
  type: GET_CARS_SUCCESS,
  payload: data,
});

export const addCar = (car: string, driverId: number | null) => ({
  type: ADD_CAR,
  car,
  driverId,
});

export const updateCar = (
  id: number,
  car: string,
  driverId: number | null
) => ({
  type: UPDATE_CAR,
  id,
  car,
  driverId,
});

export const deleteCar = (id: number, driverId: number | null) => ({
  type: DELETE_CAR,
  id,
  driverId,
});
