import {
  GET_DRIVERS_REQUESTED,
  GET_DRIVERS_SUCCESS,
  IDriversActions,
  IDriversDeafaultState,
} from "./models";

const defaultState: IDriversDeafaultState = {
  is_error: false,
  status: "idle",
  data: [],
  loading: false,
};

export const driversReducer = (
  state = defaultState,
  action: IDriversActions
) => {
  switch (action.type) {
    case GET_DRIVERS_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case GET_DRIVERS_REQUESTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
