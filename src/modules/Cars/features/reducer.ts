import {
  carsActions,
  // ICarsActions,
  ICarsState,
  TCarsActions,
} from "./models";

export const defaultState: ICarsState = {
  isError: null,
  isLoading: false,
  cars: null,
};

export const carsReducer = (
  state = defaultState,
  action: TCarsActions
): ICarsState => {
  switch (action.type) {
    case carsActions.SET_CARS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload.data,
        isError: action.payload.is_error,
      };
    case carsActions.GET_CARS:
      return {
        ...state,
        isLoading: true,
      };
    case carsActions.DELETE_CAR:
      const cars = state.cars?.filter((car) => car.id !== action.id) || null;
      return {
        ...state,
        cars,
      };
    default:
      return state;
  }
};
