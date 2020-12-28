import { CameraActionTypes, CameraState, SET_IMAGE } from "./types";

const initialState: CameraState = {
  image: null,
} as const;
export default function cameraReducer(
  state: CameraState = initialState,
  action: CameraActionTypes
): CameraState {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        image: action.image,
      };

    default:
      return state;
  }
}
