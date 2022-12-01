import { takeEvery } from 'redux-saga/effects';
import { API_KEY, DRIVER_PATH, PATH } from '../../constants/api';
import { POST_DRIVER } from '../actions';
import { getDrivers } from './getDrivers';

const fetchPath = (driver: string) => fetch(PATH + DRIVER_PATH, {
  method: 'POST',
  headers: {
    'X-Authorization': API_KEY,
  },
  body: driver,
})

type TDriver = {
  payload: string;
  type: string;
}
  
export function* postDriver(driver: TDriver) {  
  yield fetchPath(driver.payload); 
  yield getDrivers();
};

export function* watchPostDriver() {
  yield takeEvery(POST_DRIVER, postDriver);
};