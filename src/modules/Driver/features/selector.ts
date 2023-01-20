import { RootState } from "../../../store/combineReducer";

export const driverSelector = (state: RootState) => state.driverReducer;
