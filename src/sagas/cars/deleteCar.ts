import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { DELETE_CAR } from "../../modules/car/models";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  payload: {
    id: number;
    currentId?: number;
  };
  type: string;
};

function* deleteCar({ payload }: TCar) {
  yield fetchData({ method: "DELETE", path: Endpoints.CARS, id: payload.id });
  yield getCars({ id: payload.currentId });
}

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
}
