import {
  DELETE_DRIVER,
  GET_DRIVER_REQUESTED,
  GET_DRIVER_SUCCESS,
  IDriverDeafaultState,
  ADD_DRIVER,
  UPDATE_DRIVER,
} from "./models";

export const requestDriverById = (id: number) => ({
  type: GET_DRIVER_REQUESTED,
  id,
});

export const responseDriver = (data: IDriverDeafaultState) => ({
  type: GET_DRIVER_SUCCESS,
  payload: data,
});

export const deleteDriver = (id: number) => ({
  type: DELETE_DRIVER,
  id,
});

export const addDriver = (driver: string) => ({
  type: ADD_DRIVER,
  driver,
});

export const updateDriver = (
  id: number,
  driver: string,
  redirectId: number | null
) => ({
  type: UPDATE_DRIVER,
  id,
  driver,
  redirectId,
});
