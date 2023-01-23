import { put, takeEvery } from "redux-saga/effects";
import { BASE_API_URL } from "../../../api/constants";
import { Endpoints } from "../../../api/endpoints";
import { httpGet, TFormatResponse } from "../../../shared/helpers/httpClient";
import { responseDriversCars } from "./actionCreators";
import { GET_DRIVERS_CARS_REQUESTED } from "./models";

type TCars = {
  type?: string;
  id?: number;
};

export function* getDriversCars({ id }: TCars) {
  const response: TFormatResponse = yield httpGet(
    `${BASE_API_URL}${Endpoints.CARS}/`,
    id
  );
  yield put(responseDriversCars(response.data));
}

export function* watchDriversCarSagas() {
  yield takeEvery(GET_DRIVERS_CARS_REQUESTED, getDriversCars);
}
