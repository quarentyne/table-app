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

export const GET_DRIVERS = 'GET_DRIVERS';
export const ASYNC_GET_DRIVERS = 'ASYNC_GET_DRIVERS';

export interface IDriversDeafaultState {
  isError: boolean;
  status: string;
  data: IDriver[];
};

interface IDraversActions{
  type: string;
  payload: IDriversDeafaultState;
};

const defaultState: IDriversDeafaultState = {
  isError: false,
  status: 'idle',
  data: [],
};

export const driversReducer = (state = defaultState, action: IDraversActions) => {
  switch (action.type) {    
    case GET_DRIVERS:
      return { ...state, ...action.payload };
    default:
      return state;
  };
};