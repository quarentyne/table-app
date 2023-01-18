import { combineReducers } from "redux";
import { carsReducer } from "../modules/Car/reducer";
import { driversReducer } from "../modules/Driver/reducer";

export const rootReducer = combineReducers({
  drivers: driversReducer,
  cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
