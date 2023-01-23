import { combineReducers } from "redux";
import { carsReducer } from "../modules/Cars/features/reducer";
import { driverReducer } from "../modules/Driver/features/reducer";
import { driversReducer } from "../modules/Drivers/features/reducer";
import { driversCarsReducer } from "../modules/DriversCars/features/reducer";

export const rootReducer = combineReducers({
  drivers: driversReducer,
  driver: driverReducer,
  cars: carsReducer,
  driversCars: driversCarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
