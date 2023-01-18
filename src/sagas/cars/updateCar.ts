import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { UPDATE_CAR } from "../../modules/car/models";
import { httpMethods } from "../../shared/helpers/httpMethods";
import { fetchData } from "../fetchData";
import { getCars } from "./getCars";

type TCar = {
  type: string;
  payload: {
    id: number;
    car: string;
    redirectID?: number;
  };
};

type TUpdateCarRequest = {
  method: string;
  path: string;
  id: number;
  body: string;
};

function* updateCar(data: TCar) {
  const request: TUpdateCarRequest = {
    method: httpMethods.PATCH,
    body: data.payload.car,
    path: Endpoints.CARS,
    id: data.payload.id,
  };

  yield fetchData(request);
  yield getCars({ id: data.payload.redirectID });
}

export function* watchPatchCar() {
  yield takeEvery(UPDATE_CAR, updateCar);
}
