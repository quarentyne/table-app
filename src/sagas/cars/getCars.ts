import { put, takeEvery, call } from 'redux-saga/effects';
import { API_KEY, CAR_PATH,PATH } from '../../constants/api';
import { ICarsDeafaultState } from '../../redux/reducers/carsReducer';
import { GET_CARS_REQUESTED,  responseCars } from '../actions';

const fetchPath = (targetID?: number) => {
  type THeaders = {
    'X-Authorization': string;
    'E-Driver-Id'?: string;
  };

  const headers: THeaders = {
    'X-Authorization': API_KEY,
  };

  if (targetID) {
    headers['E-Driver-Id'] = String(targetID);
  };
  
  return fetch(PATH + CAR_PATH, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => { throw error });
};

type IGetCars = {
  type?: string;
  id?: number;
};

export function* getCars(request?: IGetCars) {
  let response: ICarsDeafaultState; 
  if (request?.id) {
    response = yield call(fetchPath.bind(null, request.id)); 
  } else {
    response = yield call(fetchPath);     
  }  
  yield put(responseCars(response));
};

export function* watchGetCars() {
  yield takeEvery(GET_CARS_REQUESTED, getCars);
};