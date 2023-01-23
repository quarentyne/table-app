import {
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  IDriversActions,
  IDriversDefaultState,
} from "./models";

const defaultState: IDriversDefaultState = {
  isError: null,
  drivers: null,
  isLoading: false,
};

export const driversReducer = (
  state = defaultState,
  action: IDriversActions
) => {
  switch (action.type) {
    case GET_DRIVERS_SUCCESS:
      return {
        ...state,
        drivers: action.payload.data,
        isError: action.payload.is_error,
        isLoading: false,
      };
    case GET_DRIVERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
