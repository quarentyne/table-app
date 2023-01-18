import {
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  GET_CARS_BY_ID_REQUESTED,
  ICarsActions,
  ICarsDefaultState,
} from "./models";

export const defaultState: ICarsDefaultState = {
  is_error: null,
  status: null,
  data: null,
};

export const carsReducer = (state = defaultState, action: ICarsActions) => {
  switch (action.type) {
    case GET_CARS_SUCCESS:
      return { ...state, ...action.payload };
    case GET_CARS_REQUESTED:
      return { ...state };
    case GET_CARS_BY_ID_REQUESTED:
      return { ...state };
    default:
      return state;
  }
};
