import {
  UserActionTypes,
  UserState,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "./types";

const initialState: UserState = {
  isLoggingOut: false,
  isLoggingIn: false,
  isVerifying: false,
  isAuthenticated: false,

  loginError: null,
  logoutError : null,
  user: null,
} as const;
export default function userReducer (
  state : UserState = initialState,
  action: UserActionTypes
): UserState {
  // console.log("USER REDUCER ", {state, action});

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoggingIn: false,
        loginError: null,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoggingIn: false,
        user: null,
        loginError: action.message || null,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoggingOut: false,
        logoutError : null,
        user: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError : action.message || null,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };

    default:
      return state;
  }
}
