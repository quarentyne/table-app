import { put, takeEvery, call } from 'redux-saga/effects';
import { API_KEY, CAR_PATH,PATH } from '../../constants/api';
import { ICarsDeafaultState } from '../../redux/reducers/carsReducer';
import { GET_CARS_REQUESTED,  responseCars } from '../actions';

const fetchPath = () => fetch(PATH + CAR_PATH, {
  method: 'GET',
  headers: {
    'X-Authorization': API_KEY,
  },
})
  .then(response => response.json())
  .catch(error => { throw error });


export function* getCars() {
  const response: ICarsDeafaultState = yield call(fetchPath); 
  yield put(responseCars(response));
};

export function* watchGetCars() {
  yield takeEvery(GET_CARS_REQUESTED, getCars);
};