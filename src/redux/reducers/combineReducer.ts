import { combineReducers } from "redux";
import { getDriversReducer } from "./driversReducer";
import { languagesReducer } from "./languagesReducer";

export const rootReducer = combineReducers({
  language: languagesReducer,
  drivers: getDriversReducer,
});

export type RootState = ReturnType<typeof rootReducer>;