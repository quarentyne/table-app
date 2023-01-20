import { combineReducers } from "redux";
import { carsReducer } from "../modules/Cars/features/reducer";
import { driverReducer } from "../modules/Driver/features/reducer";
import { driversReducer } from "../modules/Drivers/features/reducer";

export const rootReducer = combineReducers({
  driversReducer,
  driverReducer,
  carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
