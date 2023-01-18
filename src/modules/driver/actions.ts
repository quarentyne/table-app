import {
  DELETE_DRIVER,
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  GET_DRIVER_BY_ID_REQUESTED,
  IDriversDeafaultState,
  UPDATE_DRIVER,
  POST_DRIVER,
} from "./models";

export const requestDrivers = () => ({
  type: GET_DRIVERS_REQUESTED,
});

export const requestDriverById = (id: number) => ({
  type: GET_DRIVER_BY_ID_REQUESTED,
  id,
});

export const responseDrivers = (data: IDriversDeafaultState) => ({
  type: GET_DRIVERS_SUCCESS,
  payload: data,
});

export const addDriver = (driver: string) => ({
  type: POST_DRIVER,
  payload: driver,
});

export const deleteDriver = (id: number) => ({
  type: DELETE_DRIVER,
  payload: { id },
});

export const updateDriver = (
  id: number,
  driver: string,
  redirectID: number | null
) => ({
  type: UPDATE_DRIVER,
  payload: { id, driver, redirectID },
});
