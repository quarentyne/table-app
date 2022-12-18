import { combineReducers } from "redux";
import { carsReducer } from "../modules/car/reducer";
import { driversReducer } from "../modules/driver/reducer";
// import { languagesReducer } from "../redux/reducers/languagesReducer";

export const rootReducer = combineReducers({
  // language: languagesReducer,
  drivers: driversReducer,
  cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;