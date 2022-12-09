import { ICarsDeafaultState } from "../redux/reducers/carsReducer";
import { IDriversDeafaultState } from "../redux/reducers/driversReducer";

export const GET_DRIVERS_SUCCESS = 'GET_DRIVERS_SUCCESS';
export const GET_DRIVERS_REQUESTED = 'GET_DRIVERS_REQUESTED';
export const POST_DRIVER = 'POST_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const PATCH_DRIVER = 'PATCH_DRIVER';

export const requestDrivers = (id?: number) => ({ type: GET_DRIVERS_REQUESTED, id });
export const responseDrivers = (data: IDriversDeafaultState) => ({ type: GET_DRIVERS_SUCCESS, payload: data });
export const addDriver = (driver: string) => ({ type: POST_DRIVER, payload: driver });
export const deleteDriver = (id: number) => ({ type: DELETE_DRIVER, id });
export const patchDriver = (id: number, driver: string, currentId?: number) => ({ type: PATCH_DRIVER, data: { id, driver, currentId } });

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_REQUESTED = 'GET_CARS_REQUESTED';
export const POST_CAR = 'POST_CAR';
export const PATCH_CAR = 'PATCH_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export const requestCars = (id?: number) => ({ type: GET_CARS_REQUESTED, id });
export const responseCars = (data: ICarsDeafaultState) => ({ type: GET_CARS_SUCCESS, payload: data });
export const addCar = (car: string) => ({ type: POST_CAR, payload: car });
export const patchCar = (id: number, car: string, currentId?: number) => ({ type: PATCH_CAR, data: { id, car, currentId } });
export const deleteCar = (id: number, currentId?: number) => ({ type: DELETE_CAR, id, currentId});