import { takeEvery } from "redux-saga/effects";
import { CAR_PATH } from "../../constants/api";
import { DELETE_CAR } from "../actions";
import { fetchPath } from "../fetchPath";
import { getCars } from "./getCars";

type TCar = {
  id: number;
  type: string;
  currentId?: number;
};

function* deleteCar({id, currentId} :TCar){ 
  yield fetchPath({method: 'DELETE', path: CAR_PATH, id: id});
  yield getCars({ id: currentId });   
};

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
};