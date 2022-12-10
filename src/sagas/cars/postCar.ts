import { takeEvery } from 'redux-saga/effects';
import { CAR_PATH } from '../../constants/api';
import { POST_CAR } from '../actions';
import { fetchPath } from '../fetchPath';
import { getCars } from './getCars';

type TCar = {
  payload: string;
  type: string;
};
  
export function* postCar(car: TCar) {  
  yield fetchPath({method: 'POST', path: CAR_PATH, body: car.payload}); 
  yield getCars();
};

export function* watchPostCar() {
  yield takeEvery(POST_CAR, postCar);
};