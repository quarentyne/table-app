import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { PATCH_CAR } from "../../modules/car/models";
import { fetchPath } from "../fetchPath";
import { getCars } from "./getCars";

type TCar = {
  type: string;
  data: {
    id: number;
    car: string;
    currentId?: number;
  }
};

type TPatchCarRequest = {
  method: string;
  path: string;
  id: number;
  body: string;
};

function* patchCar(data: TCar) {     
  const request: TPatchCarRequest = {
    method: 'PATCH',
    body: data.data.car,
    path: Endpoints.CARS,
    id: data.data.id,
  };  

  yield fetchPath(request);
  yield getCars({ id: data.data.currentId });    
};

export function* watchPatchCar() {
  yield takeEvery(PATCH_CAR, patchCar);
};