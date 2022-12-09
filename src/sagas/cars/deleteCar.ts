import { takeEvery } from "redux-saga/effects";
import { API_KEY, CAR_PATH, PATH } from "../../constants/api";
import { DELETE_CAR } from "../actions";
import { getCars } from "./getCars";

const fetchPath = (id: number) => fetch(PATH + CAR_PATH + id + '/', {
  method: 'DELETE',
  headers: {
    'X-Authorization': API_KEY,
  },
});

type TCar = {
  id: number;
  type: string;
  currentId?: number;
};

function* deleteCar({id, currentId} :TCar){ 
  yield fetchPath(id);
  if (currentId) {
    yield getCars({ id: currentId });   
  } else {
    yield getCars();    
  };
};

export function* watchDeleteCar() {
  yield takeEvery(DELETE_CAR, deleteCar);
};