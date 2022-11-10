import { combineReducers } from "redux";
import { languagesReducer } from "./languagesReducer";

export const rootReducer = combineReducers({
  language: languagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;