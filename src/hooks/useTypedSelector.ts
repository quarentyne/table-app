import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/combineReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;