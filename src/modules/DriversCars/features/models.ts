export const GET_DRIVERS_CARS_SUCCESS = "GET_DRIVERS_CARS_SUCCESS";
export const GET_DRIVERS_CARS_REQUESTED = "GET_DRIVERS_CARS_REQUESTED";

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

export interface ICarsDefaultState {
  isError: boolean | null;
  isLoading: boolean;
  cars: ICar[] | null;
}

export interface ICarsServerResponse {
  data: ICar[];
  is_error: boolean;
}

export interface ICarsActions {
  type: string;
  payload: ICarsServerResponse;
}
