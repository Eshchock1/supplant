import { ScanActionTypes, GET_SCANS_REQUEST, GET_SCANS_SUCCESS, GET_SCANS_DONE, GET_SCANS_ERROR, RESET_SCANS } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../types";

import firebase from "../../firebase";
import type { FirebaseProvider } from "../../firebase";
import { ImageScan, ImageScan_t, ImageScan_t_F } from "../../types/imageScan";

let LastVisible: FirebaseProvider.firestore.QueryDocumentSnapshot<FirebaseProvider.firestore.DocumentData> | null = null;

type ScanAction_t = ThunkAction<any, RootState, undefined, ScanActionTypes>;

export const GetMoreScans = (start = false): ScanAction_t => async (dispatch, getState) => {
  dispatch({ type: GET_SCANS_REQUEST });
  
	const rootState = getState();
	const uid = rootState.user.user?.uid;

	if (!uid) {
		return dispatch({ type: GET_SCANS_DONE });
	}
	const state = rootState.scans;
	if (state.endOfList) {
		return dispatch({ type: GET_SCANS_DONE });
	}
	if (start && state.scansPerPage <= state.scans.length) return dispatch({ type: GET_SCANS_DONE });

	let query: FirebaseProvider.firestore.Query = firebase.firestore().collection(`users/${uid}/images`);
	query = query.orderBy("createdAt", "desc");

	if (LastVisible) {
		query = query.startAfter(LastVisible);
	}

	query = query.limit(state.scansPerPage);
	try {
		const snapshots = await query.get();
		const scans = snapshots.docs.map((doc) => ImageScan.fromFirebase(doc.data() as ImageScan_t_F, doc.id));
		LastVisible = snapshots.docs[snapshots.docs.length - 1];

		return dispatch({
			type: GET_SCANS_SUCCESS,
			scans,
			endOfList: snapshots.docs.length < state.scansPerPage,
		});
	} catch (error) {
		console.error(error);

		return dispatch({
			type: GET_SCANS_ERROR,
			message: (error && error.message) || "Error: Unknown Error Occurred Attempting To Fetch Scans",
		});
	}
};

export const RefreshScans = (): ScanAction_t => (dispatch, getState) => {
  dispatch({ type: RESET_SCANS });
  LastVisible = null;
	return dispatch(GetMoreScans(true));
};
