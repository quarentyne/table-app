import { put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import {
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
  TFormatResponse,
} from "../../../shared/helpers/httpClient";
import { responseCars } from "./actionCreators";
import {
  ADD_CAR,
  DELETE_CAR,
  GET_CARS_BY_ID_REQUESTED,
  GET_CARS_REQUESTED,
  UPDATE_CAR,
} from "./models";

type TCars = {
  type?: string;
  id?: number;
  car?: string;
  redirectId?: number;
};

function* getCars() {
  const response: TFormatResponse = yield httpGet(
    BASE_API_URL + Endpoints.CARS
  );
  yield put(responseCars(response.data));
}

function* getCarsByDriverId({ id }: TCars) {
  const response: TFormatResponse = yield httpGet(
    `${BASE_API_URL}${Endpoints.CARS}/`,
    id
  );
  yield put(responseCars(response.data));
}

function* deleteCar({ id, redirectId }: TCars) {
  yield httpDelete(`${BASE_API_URL}${Endpoints.CARS}${id}/`);
  if (redirectId) {
    yield getCarsByDriverId({ id: redirectId });
  } else {
    yield getCars();
  }
}

function* addCar({ car, redirectId }: TCars) {
  yield httpPost(`${BASE_API_URL}${Endpoints.CARS}`, car);
  if (redirectId) {
    yield getCarsByDriverId({ id: redirectId });
  } else {
    yield getCars();
  }
}

function* updateCar({ id, redirectId, car }: TCars) {
  yield httpPatch(`${BASE_API_URL}${Endpoints.CARS}${id}/`, car);
  if (redirectId) {
    yield getCarsByDriverId({ id: redirectId });
  } else {
    yield getCars();
  }
}

export function* watchCarSagas() {
  yield takeEvery(GET_CARS_REQUESTED, getCars);
  yield takeEvery(GET_CARS_BY_ID_REQUESTED, getCarsByDriverId);
  yield takeEvery(DELETE_CAR, deleteCar);
  yield takeEvery(ADD_CAR, addCar);
  yield takeEvery(UPDATE_CAR, updateCar);
}
