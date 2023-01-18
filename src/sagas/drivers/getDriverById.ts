import { put, takeEvery, call } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import {
  GET_DRIVER_BY_ID_REQUESTED,
  IDriverResponse,
  IDriversDeafaultState,
} from "../../modules/Driver/models";
import { responseDrivers } from "../../modules/Driver/actions";
import { fetchData } from "../fetchData";
import { httpMethods } from "../../shared/helpers/httpMethods";

type TGetDriver = {
  type: string;
  id: number;
};

type TGetDriverRequest = {
  method: string;
  path: string;
  id: number;
};

export function* getDriverById({ id }: TGetDriver) {
  const getDriverRequest: TGetDriverRequest = {
    method: httpMethods.GET,
    path: Endpoints.DRIVERS,
    id,
  };

  const driver: IDriverResponse = yield call(
    fetchData.bind(null, getDriverRequest)
  );
  const response: IDriversDeafaultState = { ...driver, data: [driver.data] };

  yield put(responseDrivers(response));
}

export function* watchGetDriverById() {
  yield takeEvery(GET_DRIVER_BY_ID_REQUESTED, getDriverById);
}
