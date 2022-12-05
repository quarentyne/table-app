import { takeEvery } from "redux-saga/effects";
import { API_KEY, CAR_PATH, PATH } from "../../constants/api";
import { DELETE_CAR } from "../actions";
import { getCars } from "./getCars";

const fetchPath = (id: number) => fetch(PATH + CAR_PATH + id + '/', {
  method: 'DELETE',
  headers: {
    'X-Authorization': API_KEY,
  },
});

type TCar = {
  id: number;
  type: string;
};

function* deleteCar({id} :TCar){ 
  yield fetchPath(id);
  yield getCars();
};

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
};