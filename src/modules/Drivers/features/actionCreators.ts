import {
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  IDriversDeafaultState,
} from "./models";

export const requestDrivers = () => ({
  type: GET_DRIVERS_REQUESTED,
});

export const responseDrivers = (data: IDriversDeafaultState) => ({
  type: GET_DRIVERS_SUCCESS,
  payload: data,
});
