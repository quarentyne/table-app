
import { put, takeEvery, call } from 'redux-saga/effects';
import { API_KEY, DRIVER_PATH, PATH } from '../../constants/api';
import {  IDriverDeafaultState, IDriversDeafaultState } from '../../redux/reducers/driversReducer';
import { GET_DRIVERS_REQUESTED, responseDrivers } from '../actions';

const fetchPath = (id?: number) => fetch(PATH + DRIVER_PATH + (id ? id + '/' : ''), {
    method: 'GET',
    headers: {
      'X-Authorization': API_KEY,
    },
  })
  .then(response => response.json())
  .catch(error => { throw error });

type IGetDrivers = {
  type?: string;
  id?: number;
};

export function* getDrivers(request?: IGetDrivers) {
  let response: IDriversDeafaultState;
  if (request?.id) {
    const demand: IDriverDeafaultState = yield call(fetchPath.bind(null, request.id)); 
    const driver = [];
    driver.push(demand.data);
    response = { ...demand, data: driver };
  } else {
    response = yield call(fetchPath);     
  };  
  yield put(responseDrivers(response));
};

export function* watchGetDrivers() {
  yield takeEvery(GET_DRIVERS_REQUESTED, getDrivers);
};