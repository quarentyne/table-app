import { combineReducers } from "redux";
import { driversReducer } from "./driversReducer";
import { languagesReducer } from "./languagesReducer";

export const rootReducer = combineReducers({
  language: languagesReducer,
  drivers: driversReducer,
});

export type RootState = ReturnType<typeof rootReducer>;