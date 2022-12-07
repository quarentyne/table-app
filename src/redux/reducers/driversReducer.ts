import { GET_DRIVERS_REQUESTED, GET_DRIVERS_SUCCESS } from "../../sagas/actions";

interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: {
    code: string;
    title: string;
  };
};

export interface IDriversDeafaultState {
  isError: boolean;
  status: string;
  data: IDriver[];
  loading: boolean;
};

export interface IDriverDeafaultState {
  isError: boolean;
  status: string;
  data: IDriver;
  loading: boolean;
};

interface IDraversActions{
  type: string;
  payload: IDriversDeafaultState;
};

const defaultState: IDriversDeafaultState= {
  isError: false,
  status: 'idle',
  data: [],
  loading: false,
};

export const getDriversReducer = (state = defaultState, action: IDraversActions) => {  
  switch (action.type) {    
    case GET_DRIVERS_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case GET_DRIVERS_REQUESTED:
      return { ...state, loading: true };
    default:
      return state;
  };
};