import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { DELETE_DRIVER } from "../../modules/driver/models";
import { fetchData } from "../fetchData";
import { getDrivers } from "./getDrivers";

type TDriver = {
  id: number;
  type: string;
  currentId?: number;
};

function* deleteDriver({ id, currentId }: TDriver) {
  yield fetchData({ method: "DELETE", path: Endpoints.DRIVERS, id: id });
  yield getDrivers({ id: currentId });
}

export function* watchDeleteDriver() {
  yield takeEvery(DELETE_DRIVER, deleteDriver);
}
