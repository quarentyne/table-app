import { takeEvery } from 'redux-saga/effects';
import { Endpoints } from '../../api/endpoints';
import { POST_CAR } from '../../modules/car/models';
import { fetchPath } from '../fetchPath';
import { getCars } from './getCars';

type TCar = {
  payload: string;
  type: string;
};
  
export function* postCar(car: TCar) {  
  yield fetchPath({method: 'POST', path: Endpoints.CARS, body: car.payload}); 
  yield getCars();
};

export function* watchPostCar() {
  yield takeEvery(POST_CAR, postCar);
};