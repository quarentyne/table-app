import { takeEvery } from 'redux-saga/effects';
import { API_KEY, CAR_PATH, PATH } from '../../constants/api';
import { POST_CAR } from '../actions';
import { getCars } from './getCars';

const fetchPath = (car: string) => fetch(PATH + CAR_PATH, {
  method: 'POST',
  headers: {
    'X-Authorization': API_KEY,
  },
  body: car,
});

type TCar = {
  payload: string;
  type: string;
};
  
export function* postCar(car: TCar) {  
  yield fetchPath(car.payload); 
  yield getCars();
};

export function* watchPostCar() {
  yield takeEvery(POST_CAR, postCar);
};