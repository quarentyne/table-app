import {
  driversActions,
  IDriverServerResponse,
  IDriversServerResponse,
} from "./models";

export const getDrivers = () => ({
  type: driversActions.GET_DRIVERS,
});

export const setDriversData = (data: IDriversServerResponse) => ({
  type: driversActions.SET_DRIVERS,
  payload: data,
});

export const addDriver = (driver: string) => ({
  type: driversActions.ADD_DRIVER,
  driver,
});

export const setNewDriverData = (data: IDriverServerResponse) => ({
  type: driversActions.SET_NEW_DRIVER,
  payload: data,
});

export const updateDriverData = (id: number, driver: string) => ({
  type: driversActions.UPDATE_DRIVER_DATA,
  id,
  driver,
});

export const setUpdatedDriverData = (data: IDriverServerResponse) => ({
  type: driversActions.SET_UPDATED_DRIVER_DATA,
  payload: data,
});

export const deleteDriver = (id: number) => ({
  type: driversActions.DELETE_DRIVER,
  id,
});
