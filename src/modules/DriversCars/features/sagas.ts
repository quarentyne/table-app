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
import {
  setDriversCarsData,
  setNewDriversCarData,
  setUpdatedDriversCarData,
} from "./actionCreators";
import {
  driversCarsActions,
  IAddDriversCarAction,
  IDeleteDriversCarAction,
  IGetDriversCarsAction,
  IUpdateDriversCarAction,
} from "./models";

function* getDriversCars({ id }: IGetDriversCarsAction) {
  const response: TFormatResponse = yield call(
    httpGet,
    `${BASE_API_URL}${Endpoints.CARS}/`,
    id
  );
  yield put(setDriversCarsData(response.data));
}

function* deleteDriversCar({ id }: IDeleteDriversCarAction) {
  yield call(httpDelete, `${BASE_API_URL}${Endpoints.CARS}${id}/`);
}

function* addDriversCar({ car }: IAddDriversCarAction) {
  const response: TFormatResponse = yield call(
    httpPost,
    `${BASE_API_URL}${Endpoints.CARS}`,
    car
  );
  yield put(setNewDriversCarData(response.data));
}

function* updateDriversCar({ id, car }: IUpdateDriversCarAction) {
  const response: TFormatResponse = yield call(
    httpPatch,
    `${BASE_API_URL}${Endpoints.CARS}${id}/`,
    car
  );
  yield put(setUpdatedDriversCarData(response.data));
}

export function* watchDriversCarSagas() {
  yield takeEvery(driversCarsActions.GET_DRIVERS_CARS, getDriversCars);
  yield takeEvery(driversCarsActions.DELETE_DRIVERS_CAR, deleteDriversCar);
  yield takeEvery(driversCarsActions.UPDATE_DRIVERS_CAR, updateDriversCar);
  yield takeEvery(driversCarsActions.ADD_DRIVERS_CAR, addDriversCar);
}
