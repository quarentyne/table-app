import { takeEvery } from "redux-saga/effects";
import { API_KEY, CAR_PATH, PATH } from "../../constants/api";
import {  PATCH_CAR } from "../actions";
import { getCars } from "./getCars";

const fetchPath = (id: number, data: string) => fetch(PATH + CAR_PATH + id + '/', {
  method: 'PATCH',
  headers: {
    'X-Authorization': API_KEY,
  },
  body: data,
});

type TCar = {
  type: string;
  data: {
    id: number;
    car: string;
  }
}

function* patchCar(data: TCar) {     
  yield fetchPath(data.data.id, data.data.car);
  yield getCars();
};

export function* watchPatchCar() {
  yield takeEvery(PATCH_CAR, patchCar);
};