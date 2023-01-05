import { combineReducers } from "redux";
import { carsReducer } from "../modules/car/reducer";
import { driversReducer } from "../modules/driver/reducer";

export const rootReducer = combineReducers({
  drivers: driversReducer,
  cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
