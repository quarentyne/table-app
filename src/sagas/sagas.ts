import { all } from 'redux-saga/effects';
import { watchFetchDrivers } from './drivers/fetchDrivers';

export function* rootSaga() {
  yield all([watchFetchDrivers()]);
};