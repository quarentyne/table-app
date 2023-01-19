import { combineReducers } from "redux";
import { carsReducer } from "../modules/Car/reducer";
import { driverReducer } from "../modules/Driver/features/reducer";
import { driversReducer } from "../modules/Drivers/features/reducer";

export const rootReducer = combineReducers({
  drivers: driversReducer,
  driver: driverReducer,
  cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
