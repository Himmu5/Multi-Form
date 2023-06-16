import { call, put } from "redux-saga/effects";
import { loginUser } from "../../Apis/Auth";
import { AnyAction } from "@reduxjs/toolkit";
import { savingToken } from "../slices/Auth";

export function* AuthSaga(action: AnyAction): Generator<any, any, any> {
  const data = yield call(loginUser, action.payload);

  yield put(savingToken(data));
}
