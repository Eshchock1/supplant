import { CameraActionTypes, SET_IMAGE } from "./types";
import { ThunkAction } from "redux-thunk";

type CameraAction_t = ThunkAction<
  {},
  {},
  undefined,
  CameraActionTypes
>;

export const SetImageAction = (image: string | null): CameraAction_t => (
  dispatch
) => {
  return dispatch({
    image,
    type: SET_IMAGE
  })
};