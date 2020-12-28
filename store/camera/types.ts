export const SET_IMAGE = "SET_IMAGE";



interface SetImageAction {
    type : typeof SET_IMAGE;
    image : string | null;
}

export interface CameraState {
     image : string | null
}

export type CameraActionTypes = SetImageAction;