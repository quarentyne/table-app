import { put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";
import { responseDrivers } from "./actionCreators";
import { GET_DRIVERS_REQUESTED } from "./models";

export function* getDrivers() {
  const response: TFormatResponse = yield httpGet(
    BASE_API_URL + Endpoints.DRIVERS
  );
  yield put(responseDrivers(response.data));
}

export function* watchGetDrivers() {
  yield takeEvery(GET_DRIVERS_REQUESTED, getDrivers);
}
