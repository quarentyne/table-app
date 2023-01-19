import { all } from "redux-saga/effects";
import { watchDeleteCar } from "./cars/deleteCar";
import { watchGetCars } from "./cars/getCars";
import { watchPatchCar } from "./cars/updateCar";
import { watchPostCar } from "./cars/postCar";
import { watchGetCarsByDriverId } from "./cars/getCarsByDriverId";
import { watchDriverActions } from "../modules/Driver/features/sagas";
import { watchGetDrivers } from "../modules/Drivers/features/sagas";

export function* rootSaga() {
  yield all([
    watchGetDrivers(),
    watchDriverActions(),
    watchGetCars(),
    watchGetCarsByDriverId(),
    watchPostCar(),
    watchPatchCar(),
    watchDeleteCar(),
  ]);
}
