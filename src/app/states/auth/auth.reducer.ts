import { createReducer, on } from "@ngrx/store";
import { authLogin, authLogout } from "./auth.actions";

export interface AuthState {
    auth: boolean;
}

export const initialState: AuthState = {
    auth: false
}

export const authReducer = createReducer(
    initialState,

    on(authLogin, (state) => {
        console.log(state)
        return ({
        ...state,
        auth: true
    })}),

    on(authLogout, (state) => ({
        ...state,
        auth: false
    }))
)