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
      return {
        ...state,
        isLoading: false,
        cars: action.payload.data,
        isError: action.payload.is_error,
      };
    case GET_CARS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
