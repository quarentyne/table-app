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

// export const requestCars = () => ({ type: GET_CARS });

// export const responseCars = (data: ICarsServerResponse) => ({
//   type: SET_CARS,
//   payload: data,
// });

// export const addCar = (car: string, driverId?: string) => ({
//   type: ADD_CAR,
//   car,
//   driverId,
// });

// export const updateCar = (
//   id: number,
//   car: string,
//   driverId: number | null
// ) => ({
//   type: UPDATE_CAR,
//   id,
//   car,
//   driverId,
// });

// export const deleteCar = (id: number, driverId: number | null) => ({
//   type: DELETE_CAR,
//   id,
//   driverId,
// });
