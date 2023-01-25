import {
  GET_DRIVERS_CARS_REQUESTED,
  GET_DRIVERS_CARS_SUCCESS,
  ICarsServerResponse,
} from "./models";

export const requestDriversCars = (id: string) => ({
  type: GET_DRIVERS_CARS_REQUESTED,
  id,
});

export const responseDriversCars = (data: ICarsServerResponse) => ({
  type: GET_DRIVERS_CARS_SUCCESS,
  payload: data,
});
