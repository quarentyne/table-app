import { call, put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import {
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
  TFormatResponse,
} from "../../../shared/helpers/httpClient";
import { setNewCar, setCarsData, setUpdatedCarData } from "./actionCreators";
import {
  carsActions,
  IAddCarAction,
  IDeleteCarAction,
  IUpdateCarAction,
} from "./models";

function* getCars() {
  const response: TFormatResponse = yield call(
    httpGet,
    `${BASE_API_URL}${Endpoints.CARS}/`
  );
  yield put(setCarsData(response.data));
}

function* deleteCar({ id }: IDeleteCarAction) {
  yield call(httpDelete, `${BASE_API_URL}${Endpoints.CARS}${id}/`);
}

function* addCar({ car }: IAddCarAction) {
  const response: TFormatResponse = yield call(
    httpPost,
    `${BASE_API_URL}${Endpoints.CARS}`,
    car
  );
  yield put(setNewCar(response.data));
}

function* updateCar({ id, car }: IUpdateCarAction) {
  const response: TFormatResponse = yield call(
    httpPatch,
    `${BASE_API_URL}${Endpoints.CARS}${id}/`,
    car
  );
  yield put(setUpdatedCarData(response.data));
}

export function* watchCarSagas() {
  yield takeEvery(carsActions.GET_CARS, getCars);
  yield takeEvery(carsActions.DELETE_CAR, deleteCar);
  yield takeEvery(carsActions.ADD_CAR, addCar);
  yield takeEvery(carsActions.UPDATE_CAR, updateCar);
}
