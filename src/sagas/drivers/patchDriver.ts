import { takeEvery } from "redux-saga/effects";
import { API_KEY, DRIVER_PATH, PATH } from "../../constants/api";
import {  PATCH_DRIVER } from "../actions";
import { getDrivers } from "./getDrivers";

const fetchPath = (id: number, data: string) => fetch(PATH + DRIVER_PATH + id + '/', {
  method: 'PATCH',
  headers: {
    'X-Authorization': API_KEY,
  },
  body: data,
});

type TDriver = {
  type: string;
  data: {
    id: number;
    driver: string;
  }
}

function* patchDriver(data: TDriver) {     
  yield fetchPath(data.data.id, data.data.driver);
  yield getDrivers();
};

export function* watchPatchDriver() {
  yield takeEvery(PATCH_DRIVER, patchDriver);
};