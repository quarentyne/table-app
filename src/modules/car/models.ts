export const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";
export const GET_CARS_REQUESTED = "GET_CARS_REQUESTED";
export const POST_CAR = "POST_CAR";
export const PATCH_CAR = "PATCH_CAR";
export const DELETE_CAR = "DELETE_CAR";

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

export interface ICarsDeafaultState {
  is_error: boolean;
  status: string;
  data: ICar[];
  loading: boolean;
}

export interface ICarsActions {
  type: string;
  payload: ICarsDeafaultState;
}
