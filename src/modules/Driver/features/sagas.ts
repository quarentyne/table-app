import { call, put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import {
  httpGet,
  httpPatch,
  TFormatResponse,
} from "../../../shared/helpers/httpClient";
import { responseDriver, setUpdatedCurrentDriverData } from "./actionCreators";
import {
  driverActions,
  IGetDriverAction,
  IUpdateDriverDataAction,
} from "./models";

function* getDriverById({ id }: IGetDriverAction) {
  const response: TFormatResponse = yield call(
    httpGet,
    `${BASE_API_URL}${Endpoints.DRIVERS}${id}/`
  );
  yield put(responseDriver(response.data));
}

function* updateDriver({ id, driver }: IUpdateDriverDataAction) {
  const response: TFormatResponse = yield call(
    httpPatch,
    `${BASE_API_URL}${Endpoints.DRIVERS}${id}/`,
    driver
  );
  yield put(setUpdatedCurrentDriverData(response.data));
}

export function* watchDriverSagas() {
  yield takeEvery(driverActions.GET_DRIVER, getDriverById);
  yield takeEvery(driverActions.UPDATE_CURRENT_DRIVER_DATA, updateDriver);
}
