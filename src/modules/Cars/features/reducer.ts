import {
  GET_CARS_REQUESTED,
  GET_CARS_SUCCESS,
  ICarsActions,
  ICarsDefaultState,
} from "./models";

export const defaultState: ICarsDefaultState = {
  isError: null,
  isLoading: false,
  cars: null,
};

export const carsReducer = (state = defaultState, action: ICarsActions) => {
  switch (action.type) {
    case GET_CARS_SUCCESS:
      state.isLoading = false;
      state.cars = action.payload.data;
      state.isError = action.payload.is_error;
      return { ...state };
    case GET_CARS_REQUESTED:
      state.isLoading = true;
      return { ...state };
    default:
      return state;
  }
};
