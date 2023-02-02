import { carsActions, ICarsState, TCarsActions } from "./models";

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
      return {
        ...state,
        cars: state.cars?.filter((car) => car.id !== action.id) || state.cars,
      };
    case carsActions.SET_NEW_CAR:
      return {
        ...state,
        cars: state.cars?.concat([action.payload.data]) || [
          action.payload.data,
        ],
        isError: action.payload.is_error,
      };
    case carsActions.SET_UPDATED_CAR_DATA:
      action.payload.data.id = String(action.payload.data.id);
      return {
        ...state,
        cars:
          state.cars?.map((car) => {
            if (car.id === action.payload.data.id) {
              return { ...car, ...action.payload.data };
            }
            return car;
          }) || state.cars,
        isError: action.payload.is_error,
      };
    default:
      return state;
  }
};
