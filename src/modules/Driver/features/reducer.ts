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
      state.driver = action.payload.data;
      state.isError = action.payload.is_error;
      state.isLoading = false;
      return { ...state };
    case GET_DRIVER_REQUESTED:
      state.isLoading = true;
      return { ...state };
    default:
      return state;
  }
};
