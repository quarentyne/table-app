import { put, takeEvery, call } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import {
  GET_DRIVERS_REQUESTED,
  IDriversDeafaultState,
} from "../../modules/Driver/models";
import { responseDrivers } from "../../modules/Driver/actions";
import { fetchData } from "../fetchData";
import { httpMethods } from "../../shared/helpers/httpMethods";

type TGetDriversRequest = {
  method: string;
  path: string;
};

export function* getDrivers() {
  const getDriversRequest: TGetDriversRequest = {
    method: httpMethods.GET,
    path: Endpoints.DRIVERS,
  };

  const response: IDriversDeafaultState = yield call(
    fetchData.bind(null, getDriversRequest)
  );

  yield put(responseDrivers(response));
}

export function* watchGetDrivers() {
  yield takeEvery(GET_DRIVERS_REQUESTED, getDrivers);
}
