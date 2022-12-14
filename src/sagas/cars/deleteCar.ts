import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { DELETE_CAR } from "../../modules/car/models";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  id: number;
  type: string;
  currentId?: number;
};

function* deleteCar({ id, currentId }: TCar) {
  yield fetchData({ method: "DELETE", path: Endpoints.CARS, id: id });
  yield getCars({ id: currentId });
}

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
}
