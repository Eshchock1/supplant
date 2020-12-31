import { ScanActionTypes, ScansState, GET_SCANS_REQUEST, GET_SCANS_SUCCESS, GET_SCANS_DONE, GET_SCANS_ERROR, RESET_SCANS } from "./types";

const initialState: ScansState = {
  endOfList : false,
  isGettingScans : false,
  scans : [],
  scansPerPage : 10,

  errors : null
};

export default function cameraReducer(
  state: ScansState = initialState,
  action: ScanActionTypes
): ScansState {
  switch (action.type) {
    case GET_SCANS_REQUEST: 
      return {
        ...state,
        isGettingScans : true,
        errors : null
      }
    case GET_SCANS_SUCCESS: 
      return {
        ...state,
        scans : [...state.scans, ...action.scans],
        endOfList : action.endOfList,
        isGettingScans : false,
        errors : null

      }
    case GET_SCANS_DONE:
      return {
        ...state,
        isGettingScans : false,
        errors : null

      }
    case GET_SCANS_ERROR:
      return {
        ...state,
        isGettingScans : false,
        errors : action.message || null
      }
    case RESET_SCANS:
      return {
        ...state,
        scans : [],
        endOfList : false,
        errors : null,
      }
    default:
      return state;
  }
}
