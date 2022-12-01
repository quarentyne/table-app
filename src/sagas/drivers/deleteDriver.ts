import { takeEvery } from "redux-saga/effects";
import { API_KEY, DRIVER_PATH, PATH } from "../../constants/api";
import { DELETE_DRIVER } from "../actions";
import { getDrivers } from "./getDrivers";

const fetchPath = (id: number) => fetch(PATH + DRIVER_PATH + id + '/', {
  method: 'DELETE',
  headers: {
    'X-Authorization': API_KEY,
  },
})

type TDriver = {
  id: number;
  type: string;
}

function* deleteDriver({id} :TDriver){ 
  yield fetchPath(id);
  yield getDrivers();
};

export function* watchDeleteDriver() {
  yield takeEvery(DELETE_DRIVER, deleteDriver);
};