import { all } from "redux-saga/effects";
import { watchDriverActions } from "../modules/Driver/features/sagas";
import { watchGetDrivers } from "../modules/Drivers/features/sagas";
import { watchCarActions } from "../modules/Cars/features/sagas";

export function* rootSaga() {
  yield all([watchGetDrivers(), watchDriverActions(), watchCarActions()]);
}
