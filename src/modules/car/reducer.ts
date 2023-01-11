import {
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  ICarsActions,
  ICarsDeafaultState,
} from "./models";

export const defaultState: ICarsDeafaultState = {
  is_error: false,
  status: "idle",
  data: [],
  loading: false,
};

export const carsReducer = (state = defaultState, action: ICarsActions) => {
  switch (action.type) {
    case GET_CARS_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case GET_CARS_REQUESTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
