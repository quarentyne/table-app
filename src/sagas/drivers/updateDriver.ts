import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import {
  GET_DRIVER_BY_ID_REQUESTED,
  UPDATE_DRIVER,
} from "../../modules/Driver/models";
import { httpMethods } from "../../shared/helpers/httpMethods";
import { fetchData } from "../fetchData";
import { getDriverById } from "./getDriverById";
import { getDrivers } from "./getDrivers";

type TDriver = {
  type: string;
  payload: {
    id: number;
    driver: string;
    redirectID?: number;
  };
};

function* updateDriver(data: TDriver) {
  yield fetchData({
    method: httpMethods.PATCH,
    path: Endpoints.DRIVERS,
    body: data.payload.driver,
    id: data.payload.id,
  });
  if (data.payload.redirectID) {
    yield getDriverById({
      type: GET_DRIVER_BY_ID_REQUESTED,
      id: data.payload.redirectID,
    });
  } else {
    yield getDrivers();
  }
}

export function* watchUpdateDriver() {
  yield takeEvery(UPDATE_DRIVER, updateDriver);
}
