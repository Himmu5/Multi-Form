import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: "",
};

type State = typeof initialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AuthUser: signInUser,
    savingToken: tokenSaving,
  },
});

function tokenSaving(state: State, action: PayloadAction<{authToken : string}>) {
  console.log("tokenSaving " , action.payload);
  state.token = action.payload.authToken;
  state.loading = false;
}

function signInUser(
  state: State,
  action: PayloadAction<{ email: string; password: string }>
) {
  state.loading = true;
}

export const { AuthUser, savingToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
