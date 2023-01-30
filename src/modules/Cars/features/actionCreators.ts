import { carsActions, ICarsServerResponse } from "./models";

export const getCars = () => ({ type: carsActions.GET_CARS });

export const setCarsData = (data: ICarsServerResponse) => ({
  type: carsActions.SET_CARS,
  payload: data,
});

export const addCar = (car: string) => ({
  type: carsActions.ADD_CAR,
  car,
});

export const updateCar = (id: number, car: string) => ({
  type: carsActions.UPDATE_CAR,
  id,
  car,
});

export const deleteCar = (id: string) => ({
  type: carsActions.DELETE_CAR,
  id,
});
