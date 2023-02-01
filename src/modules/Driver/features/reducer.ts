import { driverActions, IDriverActions, IDriverState } from "./models";

const defaultState: IDriverState = {
  isError: null,
  driver: null,
  isLoading: false,
};

export const driverReducer = (state = defaultState, action: IDriverActions) => {
  switch (action.type) {
    case driverActions.SET_DRIVER:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.is_error,
        driver: action.payload.data,
      };
    case driverActions.GET_DRIVER:
      return {
        ...state,
        isLoading: true,
      };
    case driverActions.SET_UPDATED_CURRENT_DRIVER_DATA:
      return {
        ...state,
        driver: action.payload.data,
        isError: action.payload.is_error,
      };
    default:
      return state;
  }
};
