import {
  GET_DRIVER_REQUESTED,
  GET_DRIVER_SUCCESS,
  IDriverActions,
  IDriverDefaultState,
} from "./models";

const defaultState: IDriverDefaultState = {
  isError: null,
  driver: null,
  isLoading: false,
};

export const driverReducer = (state = defaultState, action: IDriverActions) => {
  switch (action.type) {
    case GET_DRIVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.is_error,
        driver: action.payload.data,
      };
    case GET_DRIVER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
