import { put, takeEvery, call } from 'redux-saga/effects';
import { Endpoints } from '../../api/endpoints';
import { GET_CARS_REQUESTED, ICarsDeafaultState } from '../../modules/car/models';
import { responseCars } from '../../modules/car/selectors';
import { fetchPath } from '../fetchPath';

type TGetCars = {
  type?: string;
  id?: number;
};

export type TGetCarsRequest = {
  method: string;
  path: string;
  headers?: string;
};

export function* getCars(request?: TGetCars) {
  const getCarsRequest: TGetCarsRequest = {
    method: 'GET',
    path: Endpoints.CARS,
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