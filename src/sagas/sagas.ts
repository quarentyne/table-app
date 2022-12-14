import { all } from 'redux-saga/effects';
import { watchDeleteCar } from './cars/deleteCar';
import { watchGetCars } from './cars/getCars';
import { watchPatchCar } from './cars/patchCar';
import { watchPostCar } from './cars/postCar';
import { watchDeleteDriver } from './drivers/deleteDriver';
import { watchGetDrivers } from './drivers/getDrivers';
import { watchPatchDriver } from './drivers/patchDriver';
import { watchPostDriver } from './drivers/postDriver';

export function* rootSaga() {
  yield all([watchGetDrivers(), watchPostDriver(), watchDeleteDriver(), watchPatchDriver(), watchGetCars(), watchPostCar(), watchPatchCar(), watchDeleteCar()]);
};