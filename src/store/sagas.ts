import { all } from "redux-saga/effects";
import { watchDriverSagas } from "../modules/Driver/features/sagas";
import { watchGetDrivers } from "../modules/Drivers/features/sagas";
import { watchCarSagas } from "../modules/Cars/features/sagas";
import { watchDriversCarSagas } from "../modules/DriversCars/features/sagas";

export function* rootSaga() {
  yield all([
    watchGetDrivers(),
    watchDriverSagas(),
    watchCarSagas(),
    watchDriversCarSagas(),
  ]);
}
