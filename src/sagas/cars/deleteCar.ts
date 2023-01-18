import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { DELETE_CAR } from "../../modules/car/models";
import { httpMethods } from "../../shared/helpers/httpMethods";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  payload: {
    id: number;
    redirectID?: number;
  };
  type: string;
};

function* deleteCar({ payload }: TCar) {
  yield fetchData({
    method: httpMethods.DELETE,
    path: Endpoints.CARS,
    id: payload.id,
  });
  yield getCars({ id: payload.redirectID });
}

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
}
