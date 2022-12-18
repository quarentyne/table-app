import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/combineReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;