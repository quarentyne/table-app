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
import { getDriversCars } from "../../DriversCars/features/sagas";
import { responseCars } from "./actionCreators";
import { ADD_CAR, DELETE_CAR, GET_CARS_REQUESTED, UPDATE_CAR } from "./models";

type TCars = {
  type?: string;
  id?: number;
  car?: string;
  driverId?: number;
};

function* getCars() {
  const response: TFormatResponse = yield httpGet(
    `${BASE_API_URL}${Endpoints.CARS}/`
  );
  yield put(responseCars(response.data));
}

function* deleteCar({ id, driverId }: TCars) {
  yield httpDelete(`${BASE_API_URL}${Endpoints.CARS}${id}/`);
  yield getCars();
  yield getDriversCars({ id: driverId });
}

function* addCar({ car, driverId }: TCars) {
  yield httpPost(`${BASE_API_URL}${Endpoints.CARS}`, car);
  yield getCars();
  yield getDriversCars({ id: driverId });
}

function* updateCar({ id, driverId, car }: TCars) {
  yield httpPatch(`${BASE_API_URL}${Endpoints.CARS}${id}/`, car);
  yield getCars();
  yield getDriversCars({ id: driverId });
}

export function* watchCarSagas() {
  yield takeEvery(GET_CARS_REQUESTED, getCars);
  yield takeEvery(DELETE_CAR, deleteCar);
  yield takeEvery(ADD_CAR, addCar);
  yield takeEvery(UPDATE_CAR, updateCar);
}
