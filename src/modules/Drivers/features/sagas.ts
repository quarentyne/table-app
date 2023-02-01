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
  setDrivers,
  setNewDriver,
  setUpdatedDriverData,
} from "./actionCreators";
import {
  driversActions,
  IAddDriverAction,
  IDeleteDriverAction,
  IUpdateDriverDataAction,
} from "./models";

function* getDrivers() {
  const response: TFormatResponse = yield call(
    httpGet,
    BASE_API_URL + Endpoints.DRIVERS
  );
  yield put(setDrivers(response.data));
}

function* addDriver({ driver }: IAddDriverAction) {
  const response: TFormatResponse = yield call(
    httpPost,
    `${BASE_API_URL}${Endpoints.DRIVERS}`,
    driver
  );
  yield put(setNewDriver(response.data));
}

function* deleteDriver({ id }: IDeleteDriverAction) {
  yield call(httpDelete, `${BASE_API_URL}${Endpoints.DRIVERS}${id}/`);
}

function* updateDriver({ id, driver }: IUpdateDriverDataAction) {
  const response: TFormatResponse = yield call(
    httpPatch,
    `${BASE_API_URL}${Endpoints.DRIVERS}${id}/`,
    driver
  );
  yield put(setUpdatedDriverData(response.data));
}

export function* watchGetDrivers() {
  yield takeEvery(driversActions.GET_DRIVERS, getDrivers);
  yield takeEvery(driversActions.ADD_DRIVER, addDriver);
  yield takeEvery(driversActions.DELETE_DRIVER, deleteDriver);
  yield takeEvery(driversActions.UPDATE_DRIVER_DATA, updateDriver);
}
