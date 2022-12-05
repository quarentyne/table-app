import { GET_CARS_REQUESTED, GET_CARS_SUCCESS } from "../../sagas/actions";

interface ICar{
  id: string;
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: {
    title: string;
    code: string;
  };
};

export interface ICarsDeafaultState {
  isError: boolean;
  status: string;
  data: ICar[];
  loading: boolean;
};

interface ICarsActions{
  type: string;
  payload: ICarsDeafaultState;
};

const defaultState: ICarsDeafaultState = {
  isError: false,
  status: 'idle',
  data: [],
  loading: false,
};


export const getCarsReducer = (state = defaultState, action: ICarsActions) => {
  switch (action.type) {    
    case GET_CARS_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case GET_CARS_REQUESTED:
      return { ...state, loading: true };
    default:
      return state;
  };
};