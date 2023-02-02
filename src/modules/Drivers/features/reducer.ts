import { driversActions, IDriversActions, IDriversState } from "./models";

const defaultState: IDriversState = {
  isError: null,
  drivers: null,
  isLoading: false,
};

export const driversReducer = (
  state = defaultState,
  action: IDriversActions
) => {
  switch (action.type) {
    case driversActions.SET_DRIVERS:
      return {
        ...state,
        drivers: action.payload.data,
        isError: action.payload.is_error,
        isLoading: false,
      };
    case driversActions.GET_DRIVERS:
      return {
        ...state,
        isLoading: true,
      };
    case driversActions.SET_NEW_DRIVER:
      return {
        ...state,
        drivers: state.drivers?.concat([action.payload.data]) || [
          action.payload.data,
        ],
        isError: action.payload.is_error,
      };
    case driversActions.SET_UPDATED_DRIVER_DATA:
      return {
        ...state,
        drivers:
          state.drivers?.map((driver) => {
            if (driver.id === action.payload.data.id) {
              return { ...driver, ...action.payload.data };
            }
            return driver;
          }) || state.drivers,
        isError: action.payload.is_error,
      };
    case driversActions.DELETE_DRIVER:
      return {
        ...state,
        drivers:
          state.drivers?.filter((driver) => driver.id !== action.id) ||
          state.drivers,
      };
    default:
      return state;
  }
};
