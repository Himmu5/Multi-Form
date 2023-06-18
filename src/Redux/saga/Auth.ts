import { call, put } from "redux-saga/effects";
import { loginUser } from "../../Apis/Auth";
import { AnyAction } from "@reduxjs/toolkit";
import { savingToken, setAlert } from "../slices/Auth";

export function* AuthSaga(action: AnyAction): Generator<any, any, any> {
  const data = yield call(loginUser, action.payload);
  if(data === undefined){
    yield put(setAlert({ message: "Network connection failed", type: "Error" }));
  }
  if (data?.authToken) {
    yield put(savingToken(data));
    yield put(setAlert({ message: "Logged In successfully", type: "Success" }));
  } else {
    yield put(setAlert({ message: data?.message, type: "Error" }));
  }
}
