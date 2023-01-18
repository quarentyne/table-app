import { takeEvery } from "redux-saga/effects";
import { Endpoints } from "../../api/endpoints";
import { PATCH_DRIVER } from "../../modules/driver/models";
import { fetchData } from "../fetchData";
import { getDrivers } from "./getDrivers";

type TDriver = {
  type: string;
  payload: {
    id: number;
    driver: string;
    redirectID?: number;
  };
};

function* patchDriver(data: TDriver) {
  yield fetchData({
    method: "PATCH",
    path: Endpoints.DRIVERS,
    body: data.payload.driver,
    id: data.payload.id,
  });
  yield getDrivers({ id: data.payload.redirectID });
}

export function* watchPatchDriver() {
  yield takeEvery(PATCH_DRIVER, patchDriver);
}
