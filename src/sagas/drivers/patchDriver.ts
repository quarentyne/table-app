import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { PATCH_DRIVER } from "../../modules/driver/models";
import { fetchData } from "../fetchData";
import { getDrivers } from "./getDrivers";

type TDriver = {
  type: string;
  data: {
    id: number;
    driver: string;
    currentId?: number;
  };
};

function* patchDriver(data: TDriver) {
  yield fetchData({
    method: "PATCH",
    path: Endpoints.DRIVERS,
    body: data.data.driver,
    id: data.data.id,
  });
  yield getDrivers({ id: data.data.currentId });
}

export function* watchPatchDriver() {
  yield takeEvery(PATCH_DRIVER, patchDriver);
}
