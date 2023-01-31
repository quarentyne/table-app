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
        cars: state.cars?.filter((car) => car.id !== action.id) || null,
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
      return {
        ...state,
        cars:
          state.cars?.map((car) => {
            if (car.id === String(action.payload.data.id)) {
              return { ...car, ...action.payload.data };
            }
            return car;
          }) || null,
        isError: action.payload.is_error,
      };
    default:
      return state;
  }
};
