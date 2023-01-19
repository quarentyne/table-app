import {
  GET_DRIVER_REQUESTED,
  GET_DRIVER_SUCCESS,
  IDriverActions,
  IDriverDeafaultState,
} from "./models";

const defaultState: IDriverDeafaultState = {
  is_error: null,
  status: null,
  data: null,
};

export const driverReducer = (state = defaultState, action: IDriverActions) => {
  switch (action.type) {
    case GET_DRIVER_SUCCESS:
      return { ...state, ...action.payload };
    case GET_DRIVER_REQUESTED:
      return { ...state };
    default:
      return state;
  }
};
