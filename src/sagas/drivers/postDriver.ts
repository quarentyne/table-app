import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { POST_DRIVER } from "../../modules/driver/models";
import { httpMethods } from "../../shared/helpers/httpMethods";
import { fetchData } from "../fetchData";
import { getDrivers } from "./getDrivers";

type TDriver = {
  payload: string;
  type: string;
};

export function* postDriver(driver: TDriver) {
  yield fetchData({
    method: httpMethods.POST,
    path: Endpoints.DRIVERS,
    body: driver.payload,
  });
  yield getDrivers();
}

export function* watchPostDriver() {
  yield takeEvery(POST_DRIVER, postDriver);
}
