import {
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  GET_DRIVER_BY_ID_REQUESTED,
  IDriversActions,
  IDriversDeafaultState,
} from "./models";

const defaultState: IDriversDeafaultState = {
  is_error: null,
  status: null,
  data: null,
};

export const driversReducer = (
  state = defaultState,
  action: IDriversActions
) => {
  switch (action.type) {
    case GET_DRIVERS_SUCCESS:
      return { ...state, ...action.payload };
    case GET_DRIVERS_REQUESTED:
      return { ...state };
    case GET_DRIVER_BY_ID_REQUESTED:
      return { ...state };
    default:
      return state;
  }
};
