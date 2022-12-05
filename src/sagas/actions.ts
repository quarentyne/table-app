import { ICarsDeafaultState } from "../redux/reducers/carsReducer";
import { IDriversDeafaultState } from "../redux/reducers/driversReducer";

export const GET_DRIVERS_SUCCESS = 'GET_DRIVERS_SUCCESS';
export const GET_DRIVERS_REQUESTED = 'GET_DRIVERS_REQUESTED';
export const POST_DRIVER = 'POST_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const PATCH_DRIVER = 'PATCH_DRIVER';

export const requestDrivers = () => ({ type: GET_DRIVERS_REQUESTED });
export const responseDrivers = (data: IDriversDeafaultState) => ({ type: GET_DRIVERS_SUCCESS, payload: data });
export const addDriver = (driver: string) => ({ type: POST_DRIVER, payload: driver });
export const deleteDriver = (id: number) => ({ type: DELETE_DRIVER, id });
export const patchDriver = (id: number, driver: string) => ({ type: PATCH_DRIVER, data: { id, driver } });

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_REQUESTED = 'GET_CARS_REQUESTED';
export const POST_CAR = 'POST_CAR';

export const requestCars = () => ({ type: GET_CARS_REQUESTED });
export const responseCars = (data: ICarsDeafaultState) => ({ type: GET_CARS_SUCCESS, payload: data });
export const addCar = (car: string) => ({ type: POST_CAR, payload: car });