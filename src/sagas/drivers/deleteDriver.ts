import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { DELETE_DRIVER } from "../../modules/driver/models";
import { httpMethods } from "../../shared/helpers/httpMethods";
import { fetchData } from "../fetchData";
import { getDrivers } from "./getDrivers";

type TDriver = {
  payload: {
    id: number;
  };
  type: string;
};

function* deleteDriver({ payload }: TDriver) {
  yield fetchData({
    method: httpMethods.DELETE,
    path: Endpoints.DRIVERS,
    id: payload.id,
  });
  yield getDrivers();
}

export function* watchDeleteDriver() {
  yield takeEvery(DELETE_DRIVER, deleteDriver);
}
