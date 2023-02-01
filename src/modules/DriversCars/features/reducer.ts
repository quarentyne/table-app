import { TDriversCarsActions, ICarsState, driversCarsActions } from "./models";

export const defaultState: ICarsState = {
  isError: null,
  isLoading: false,
  cars: null,
};

export const driversCarsReducer = (
  state = defaultState,
  action: TDriversCarsActions
) => {
  switch (action.type) {
    case driversCarsActions.SET_DRIVERS_CARS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload.data,
        isError: action.payload.is_error,
      };
    case driversCarsActions.GET_DRIVERS_CARS:
      return {
        ...state,
        isLoading: true,
      };
    case driversCarsActions.DELETE_DRIVERS_CAR:
      return {
        ...state,
        cars: state.cars?.filter((car) => car.id !== action.id) || null,
      };
    case driversCarsActions.SET_NEW_DRIVERS_CAR:
      return {
        ...state,
        cars: state.cars?.concat([action.payload.data]) || [
          action.payload.data,
        ],
        isError: action.payload.is_error,
      };
    case driversCarsActions.SET_UPDATED_DRIVERS_CAR_DATA:
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
