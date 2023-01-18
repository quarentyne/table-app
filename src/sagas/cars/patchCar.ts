import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { PATCH_CAR } from "../../modules/car/models";
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

type TPatchCarRequest = {
  method: string;
  path: string;
  id: number;
  body: string;
};

function* patchCar(data: TCar) {
  const request: TPatchCarRequest = {
    method: "PATCH",
    body: data.payload.car,
    path: Endpoints.CARS,
    id: data.payload.id,
  };

  yield fetchData(request);
  yield getCars({ id: data.payload.redirectID });
}

export function* watchPatchCar() {
  yield takeEvery(PATCH_CAR, patchCar);
}
