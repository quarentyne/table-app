
import { put, takeEvery, call } from 'redux-saga/effects';
import { API_KEY, DRIVER_PATH, PATH } from '../../constants/api';
import {  IDriversDeafaultState } from '../../redux/reducers/driversReducer';
import { GET_DRIVERS_REQUESTED, responseDrivers } from '../actions';

const fetchPath = () => fetch(PATH + DRIVER_PATH, {
  method: 'GET',
  headers: {
    'X-Authorization': API_KEY,
  },
})
  .then(response => response.json())
  .catch(error => { throw error });


export function* getDrivers() {
  const response: IDriversDeafaultState = yield call(fetchPath); 
  yield put(responseDrivers(response));
};

export function* watchGetDrivers() {
  yield takeEvery(GET_DRIVERS_REQUESTED, getDrivers);
};