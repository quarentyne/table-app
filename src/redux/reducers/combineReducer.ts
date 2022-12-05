import { combineReducers } from "redux";
import { getCarsReducer } from "./carsReducer";
import { getDriversReducer } from "./driversReducer";
import { languagesReducer } from "./languagesReducer";

export const rootReducer = combineReducers({
  language: languagesReducer,
  drivers: getDriversReducer,
  cars: getCarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;