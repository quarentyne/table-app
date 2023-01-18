import { put, takeEvery, call } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import {
  GET_CARS_BY_ID_REQUESTED,
  ICarsDefaultState,
} from "../../modules/Car/models";
import { responseCars } from "../../modules/Car/actions";
import { fetchData } from "../fetchData";
import { httpMethods } from "../../shared/helpers/httpMethods";

type TGetCars = {
  type: string;
  id: number;
};

export type TGetCarsRequest = {
  method: string;
  path: string;
  headers: string;
};

export function* getCarsByDriverId({ id }: TGetCars) {
  const getCarsRequest: TGetCarsRequest = {
    method: httpMethods.GET,
    path: Endpoints.CARS,
    headers: String(id),
  };

  const response: ICarsDefaultState = yield call(
    fetchData.bind(null, getCarsRequest)
  );
  yield put(responseCars(response));
}

export function* watchGetCarsByDriverId() {
  yield takeEvery(GET_CARS_BY_ID_REQUESTED, getCarsByDriverId);
}
