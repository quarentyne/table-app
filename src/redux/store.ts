import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/combineReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)