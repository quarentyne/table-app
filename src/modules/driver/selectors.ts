import { DELETE_DRIVER, GET_DRIVERS_REQUESTED, GET_DRIVERS_SUCCESS, IDriversDeafaultState, PATCH_DRIVER, POST_DRIVER } from "./models";

export const requestDrivers = (id?: number) => ({ type: GET_DRIVERS_REQUESTED, id });
export const responseDrivers = (data: IDriversDeafaultState) => ({ type: GET_DRIVERS_SUCCESS, payload: data });
export const addDriver = (driver: string) => ({ type: POST_DRIVER, payload: driver });
export const deleteDriver = (id: number) => ({ type: DELETE_DRIVER, id });
export const patchDriver = (id: number, driver: string, currentId?: number) => ({ type: PATCH_DRIVER, data: { id, driver, currentId } });