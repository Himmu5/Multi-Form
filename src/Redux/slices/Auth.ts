import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: "",
  alert: {
    type: "",
    message: "",
  },
};

type State = typeof initialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AuthUser: signInUser,
    savingToken: tokenSaving,
    setAlert: alertSet,
    removeAlert : hideAlert
  },
});

function hideAlert(state:State){
  state.alert = { message : "" , type : ""}
}

function alertSet(
  state: State,
  action: PayloadAction<{ type: string; message: string }>
) {
  state.alert = action.payload;
}

function tokenSaving(
  state: State,
  action: PayloadAction<{ authToken: string }>
) {
  console.log("tokenSaving ", action.payload);
  state.token = action.payload.authToken;
  state.loading = false;
}

function signInUser(
  state: State,
  action: PayloadAction<{ email: string; password: string }>
) {
  state.loading = true;
}

export const { AuthUser, savingToken , setAlert ,removeAlert } = authSlice.actions;
export const authReducer = authSlice.reducer;
