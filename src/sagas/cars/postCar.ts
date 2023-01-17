import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { POST_CAR } from "../../modules/car/models";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  payload: string;
  type: string;
  currentId?: number;
};

export function* postCar(car: TCar) {
  yield fetchData({ method: "POST", path: Endpoints.CARS, body: car.payload });
  yield getCars({ id: car.currentId });
}

export function* watchPostCar() {
  yield takeEvery(POST_CAR, postCar);
}
