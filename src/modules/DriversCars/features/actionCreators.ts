import {
  driversCarsActions,
  ICarServerResponse,
  ICarsServerResponse,
} from "./models";

export const getDriversCars = (id: string) => ({
  type: driversCarsActions.GET_DRIVERS_CARS,
  id,
});

export const setDriversCarsData = (data: ICarsServerResponse) => ({
  type: driversCarsActions.SET_DRIVERS_CARS,
  payload: data,
});

export const addDriversCar = (car: string) => ({
  type: driversCarsActions.ADD_DRIVERS_CAR,
  car,
});

export const setNewDriversCar = (data: ICarServerResponse) => ({
  type: driversCarsActions.SET_NEW_DRIVERS_CAR,
  payload: data,
});

export const updateDriversCar = (id: string, car: string) => ({
  type: driversCarsActions.UPDATE_DRIVERS_CAR,
  id,
  car,
});

export const setUpdatedDriversCarData = (data: ICarServerResponse) => ({
  type: driversCarsActions.SET_UPDATED_DRIVERS_CAR_DATA,
  payload: data,
});

export const deleteDriversCar = (id: string) => ({
  type: driversCarsActions.DELETE_DRIVERS_CAR,
  id,
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
