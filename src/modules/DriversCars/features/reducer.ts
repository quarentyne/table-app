import {
  GET_DRIVERS_CARS_SUCCESS,
  GET_DRIVERS_CARS_REQUESTED,
  ICarsActions,
  ICarsDefaultState,
} from "./models";

export const defaultState: ICarsDefaultState = {
  isError: null,
  isLoading: false,
  cars: null,
};

export const driversCarsReducer = (
  state = defaultState,
  action: ICarsActions
) => {
  switch (action.type) {
    case GET_DRIVERS_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload.data,
        isError: action.payload.is_error,
      };
    case GET_DRIVERS_CARS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
