import {
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  IDriversServerResponse,
} from "./models";

export const requestDrivers = () => ({
  type: GET_DRIVERS_REQUESTED,
});

export const responseDrivers = (data: IDriversServerResponse) => ({
  type: GET_DRIVERS_SUCCESS,
  payload: data,
});
