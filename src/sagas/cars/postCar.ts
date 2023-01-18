import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { POST_CAR } from "../../modules/car/models";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  payload: {
    car: string;
    redirectID?: number;
  };
  type: string;
};

export function* postCar(data: TCar) {
  yield fetchData({
    method: "POST",
    path: Endpoints.CARS,
    body: data.payload.car,
  });
  yield getCars({ id: data.payload.redirectID });
}

export function* watchPostCar() {
  yield takeEvery(POST_CAR, postCar);
}
