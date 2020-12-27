import {
  UserActionTypes,
  UserState,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "./types";
import { ThunkAction,  } from "redux-thunk";
import { logoutUserFn as logoutUser, SignInGoogle } from "../../utils/Auth";
import type firebase from "firebase";
import Firebase from "../../firebase";

type UserAction_t = ThunkAction<
  Promise<UserActionTypes>,
  {},
  undefined,
  UserActionTypes
>;

export const receiveLogin = (user: firebase.User) => {

  const {displayName, email, emailVerified, isAnonymous, photoURL, providerId, phoneNumber, providerData, refreshToken, uid, tenantId} = user;
  const serializedUser = {displayName, email, emailVerified, isAnonymous, photoURL, providerId, phoneNumber, providerData, refreshToken, uid, tenantId};
  return {
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
    user : serializedUser,
  };
};

export const LoginGoogleAction: UserAction_t = async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const UserCreds = await SignInGoogle();
    if (!(UserCreds && UserCreds.user))
      throw { message: "Sign In Failed No User Creds" };
    return dispatch(receiveLogin(UserCreds.user));
  } catch (error) {
    return dispatch({
      type: LOGIN_FAILURE,
      message:
        (error && error.message) ||
        "Error: Unknown Error Occurred During Logout",
    });
  }
};
// ThunkAction typedef from docs:
// type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
// R -> return type - I think it needs to be `R extends A` but I'm not sure if you *need* to return action
// S -> state type - the return type of the provided function `getState`
// E -> extra arguments type - If you want to pass in additional arguments to the action?
// A -> Action Types - the valid action types that `dispatch` is allowed to accept.

export const LogoutUserAction: UserAction_t = async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    await logoutUser();
    return dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    return dispatch({
      type: LOGOUT_FAILURE,
      message:
        (error && error.message) ||
        "Error: Unknown Error Occurred During Logout",
    });
  }
};

export const verifyAuth: UserAction_t = async (dispatch) => {
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(receiveLogin(user));
    }
    dispatch({ type: VERIFY_SUCCESS });
  });
  return dispatch({ type: VERIFY_REQUEST });
};
