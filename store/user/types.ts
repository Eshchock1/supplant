export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export interface User 
{
    displayName : string | null;
    email : string | null;
    emailVerified : boolean;
    isAnonymous : boolean;
    photoURL : string | null;
    providerId : string;
    phoneNumber : string | null;
    uid : string;
}


interface LogoutRequestAction {
    type : typeof LOGOUT_REQUEST;
}
interface LoginRequestAction {
    type : typeof LOGIN_REQUEST;
}
interface LoginSuccessAction {
    user : User;
    type : typeof LOGIN_SUCCESS;
}
interface LoginFailureAction {
    type : typeof LOGIN_FAILURE;
    message ?: string;
}
interface LogoutSuccessAction {
    type : typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
    type : typeof LOGOUT_FAILURE;
    message ?: string;
}

interface VerifyRequestAction
{
    type : typeof VERIFY_REQUEST
}

interface VerifySuccessAction {
    type : typeof VERIFY_SUCCESS;
}

export interface UserState {
    isLoggingIn : boolean; // If either in the middle of login or logout
    isLoggingOut : boolean;
    isVerifying : boolean;

    isAuthenticated : boolean;
    user : User | null;
    loginError : string | null;
    logoutError : string | null;
}

export type UserActionTypes = LoginFailureAction | LoginRequestAction | LoginSuccessAction | LogoutFailureAction | LogoutRequestAction | LogoutSuccessAction | VerifyRequestAction | VerifySuccessAction;