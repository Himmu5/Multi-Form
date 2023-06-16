import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { AuthUser } from "../slices/Auth";
import { AuthSaga } from "./Auth";

export function* rootSaga() {
  yield takeEvery(AuthUser, AuthSaga);
}

export const sagaMiddleware = createSagaMiddleware();
