import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

function AuthStateSelector (state:State){
    return state.authReducer;
}

export const tokenSelector = createSelector(AuthStateSelector , (AuthState)=>{
    return AuthState.token;
});