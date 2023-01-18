import { all } from "redux-saga/effects";
import { watchDeleteCar } from "./cars/deleteCar";
import { watchGetCars } from "./cars/getCars";
import { watchPatchCar } from "./cars/updateCar";
import { watchPostCar } from "./cars/postCar";
import { watchDeleteDriver } from "./drivers/deleteDriver";
import { watchGetDrivers } from "./drivers/getDrivers";
import { watchUpdateDriver } from "./drivers/updateDriver";
import { watchPostDriver } from "./drivers/postDriver";
import { watchGetDriverById } from "./drivers/getDriverById";
import { watchGetCarsByDriverId } from "./cars/getCarsByDriverId";

export function* rootSaga() {
  yield all([
    watchGetDrivers(),
    watchPostDriver(),
    watchDeleteDriver(),
    watchUpdateDriver(),
    watchGetCars(),
    watchGetCarsByDriverId(),
    watchPostCar(),
    watchPatchCar(),
    watchDeleteCar(),
    watchGetDriverById(),
  ]);
}
