import { put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import {
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
} from "../../../shared/helpers/httpClient";
import { getDrivers } from "../../Drivers/features/sagas";
import { responseDriver } from "./actionCreators";
import {
  ADD_DRIVER,
  DELETE_DRIVER,
  GET_DRIVER_REQUESTED,
  IDriverDeafaultState,
  UPDATE_DRIVER,
} from "./models";

type TDriver = {
  type: string;
  id?: number;
  driver?: string;
  redirectId?: number;
};

interface IResponse {
  data: IDriverDeafaultState;
}

function* getDriverById({ id }: TDriver) {
  const response: IResponse = yield httpGet(
    `${BASE_API_URL}${Endpoints.DRIVERS}${id}/`
  );
  yield put(responseDriver(response.data));
}

function* deleteDriver({ id }: TDriver) {
  yield httpDelete(`${BASE_API_URL}${Endpoints.DRIVERS}${id}/`);
  yield getDrivers();
}

function* addDriver({ driver }: TDriver) {
  yield httpPost(`${BASE_API_URL}${Endpoints.DRIVERS}`, driver);
  yield getDrivers();
}

function* updateDriver({ id, redirectId, driver }: TDriver) {
  yield httpPatch(`${BASE_API_URL}${Endpoints.DRIVERS}${id}/`, driver);
  if (redirectId) {
    yield getDriverById({
      type: GET_DRIVER_REQUESTED,
      id: redirectId,
    });
  } else {
    yield getDrivers();
  }
}

export function* watchDriverActions() {
  yield takeEvery(GET_DRIVER_REQUESTED, getDriverById);
  yield takeEvery(DELETE_DRIVER, deleteDriver);
  yield takeEvery(ADD_DRIVER, addDriver);
  yield takeEvery(UPDATE_DRIVER, updateDriver);
}
