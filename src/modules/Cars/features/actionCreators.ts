import { carsActions, ICarServerResponse, ICarsServerResponse } from "./models";

export const getCars = () => ({ type: carsActions.GET_CARS });

export const setCarsData = (data: ICarsServerResponse) => ({
  type: carsActions.SET_CARS,
  payload: data,
});

export const addCar = (car: string) => ({
  type: carsActions.ADD_CAR,
  car,
});

export const setNewCarData = (data: ICarServerResponse) => ({
  type: carsActions.SET_NEW_CAR,
  payload: data,
});

export const updateCar = (id: string, car: string) => ({
  type: carsActions.UPDATE_CAR,
  id,
  car,
});

export const setUpdatedCarData = (data: ICarServerResponse) => ({
  type: carsActions.SET_UPDATED_CAR_DATA,
  payload: data,
});

export const deleteCar = (id: string) => ({
  type: carsActions.DELETE_CAR,
  id,
});
