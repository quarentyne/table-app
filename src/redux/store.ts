import { createStore } from "redux";
import { rootReducer } from "./reducers/combineReducer";

export const store = createStore(rootReducer);