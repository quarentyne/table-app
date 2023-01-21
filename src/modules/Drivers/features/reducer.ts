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
      state.drivers = action.payload.data;
      state.isError = action.payload.is_error;
      state.isLoading = false;
      return { ...state };
    case GET_DRIVERS_REQUESTED:
      state.isLoading = true;
      return { ...state };
    default:
      return state;
  }
};
