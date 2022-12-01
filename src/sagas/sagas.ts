import { all } from 'redux-saga/effects';
import { watchDeleteDriver } from './drivers/deleteDriver';
import { watchGetDrivers } from './drivers/getDrivers';
import { watchPatchDriver } from './drivers/patchDriver';
import { watchPostDriver } from './drivers/postDriver';

export function* rootSaga() {
  yield all([watchGetDrivers(), watchPostDriver(), watchDeleteDriver(), watchPatchDriver()]);
};