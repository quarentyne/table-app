import { driverActions, IDriverServerResponse } from "./models";

export const getDriverById = (id: string) => ({
  type: driverActions.GET_DRIVER,
  id,
});

export const responseDriver = (data: IDriverServerResponse) => ({
  type: driverActions.SET_DRIVER,
  payload: data,
});

export const updateCurrentDriver = (id: number, driver: string) => ({
  type: driverActions.UPDATE_CURRENT_DRIVER_DATA,
  driver,
  id,
});

export const setUpdatedCurrentDriverData = (data: IDriverServerResponse) => ({
  type: driverActions.SET_UPDATED_CURRENT_DRIVER_DATA,
  payload: data,
});
