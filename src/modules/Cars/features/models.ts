export enum carsActions {
  SET_CARS = "SET_CARS",
  GET_CARS = "GET_CARS",
  ADD_CAR = "ADD_CAR",
  ADD_CAR_SUCCESSFUL = "ADD_CAR_SUCCESSFUL",
  UPDATE_CAR = "UPDATE_CAR",
  UPDATE_CAR_SUCCESSFUL = "UPDATE_CAR_SUCCESSFUL",
  DELETE_CAR = "DELETE_CAR",
}

interface ICar {
  id: string;
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: {
    title: string;
    code: string;
  };
}

export interface ICarsState {
  isError: boolean | null;
  isLoading: boolean;
  cars: ICar[] | null;
}

export interface test {
  type: carsActions.SET_CARS;
  payload: ICarsServerResponse;
}

export interface test2 {
  type: carsActions.GET_CARS;
}

export interface IDeleteCarAction {
  type: carsActions.DELETE_CAR;
  id: string;
}

export interface ICarsServerResponse {
  data: ICar[];
  is_error: boolean;
}

// export interface ICarsActions {
//   type: string;
//   payload: ICarsServerResponse;
// }

export type TCarsActions = test | test2 | IDeleteCarAction;
