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
    currentId?: number;
  };
};

function* patchDriver(data: TDriver) {     
  yield fetchPath(data.data.id, data.data.driver);  
  if (data.data.currentId) {
    yield getDrivers({ id: data.data.currentId });    
  } else {
    yield getDrivers();    
  }
};

export function* watchPatchDriver() {
  yield takeEvery(PATCH_DRIVER, patchDriver);
};