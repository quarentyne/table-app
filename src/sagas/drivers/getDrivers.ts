import { put, takeEvery, call } from 'redux-saga/effects';
import { Endpoints } from '../../api/endpoints';
import { GET_DRIVERS_REQUESTED, IDriverDeafaultState, IDriversDeafaultState } from '../../modules/driver/models';
import { responseDrivers } from '../../modules/driver/selectors';
import { fetchPath } from '../fetchPath';

type TGetDrivers = {
  type?: string;
  id?: number;
};

type TGetDriversRequest = {
  method: string;
  path: string;
  id?: number;
};

export function* getDrivers(request?: TGetDrivers) {
  let response: IDriversDeafaultState;
  const getDriversRequest: TGetDriversRequest = {
    method: 'GET',
    path: Endpoints.DRIVERS,
  };

  if (request?.id) {
    getDriversRequest.id = request.id;
    const demand: IDriverDeafaultState = yield call(fetchPath.bind(null, getDriversRequest)); 
    const driver = [];
    driver.push(demand.data);
    response = { ...demand, data: driver };
  } else {
    response = yield call(fetchPath.bind(null, getDriversRequest)); 
  }
  
  yield put(responseDrivers(response));
};

export function* watchGetDrivers() {
  yield takeEvery(GET_DRIVERS_REQUESTED, getDrivers);
};