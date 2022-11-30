import { put, takeEvery, call } from 'redux-saga/effects';
import { API_KEY, DRIVER_PATH, PATH } from '../../constants/api';
import { ASYNC_GET_DRIVERS, GET_DRIVERS, IDriversDeafaultState } from '../../redux/reducers/driversReducer';

const fetchPath = () => fetch(PATH + DRIVER_PATH, {
  method: 'GET',
  headers: {
    'X-Authorization': API_KEY,
  }
});


export function* fetchDrivers() {
  const result: Response = yield call(fetchPath); 
  const data: IDriversDeafaultState  = yield result.json();
  // console.log(data)
  
  yield put({type: GET_DRIVERS, payload: data});
};

export function* watchFetchDrivers() {
  yield takeEvery(ASYNC_GET_DRIVERS, fetchDrivers);
};