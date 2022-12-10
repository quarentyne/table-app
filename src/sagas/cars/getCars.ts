import { put, takeEvery, call } from 'redux-saga/effects';
import { CAR_PATH } from '../../constants/api';
import { ICarsDeafaultState } from '../../redux/reducers/carsReducer';
import { GET_CARS_REQUESTED,  responseCars } from '../actions';
import { fetchPath } from '../fetchPath';

type IGetCars = {
  type?: string;
  id?: number;
};

export type IGetCarsRequest = {
  method: string;
  path: string;
  headers?: string;
};

export function* getCars(request?: IGetCars) {
  const getCarsRequest: IGetCarsRequest = {
    method: 'GET',
    path: CAR_PATH,
  };

  if (request?.id) {
    getCarsRequest.headers = String(request.id);
  };

  const response: ICarsDeafaultState = yield call(fetchPath.bind(null, getCarsRequest)); 
  yield put(responseCars(response));
};

export function* watchGetCars() {
  yield takeEvery(GET_CARS_REQUESTED, getCars);
};