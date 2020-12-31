import {ImageScan} from '../../types/imageScan';

export const GET_SCANS_REQUEST = "GET_SCANS_REQUEST";
export const GET_SCANS_SUCCESS = "GET_SCANS_SUCCESS";
export const GET_SCANS_DONE = "GET_SCANS_DONE";
export const GET_SCANS_ERROR = "GET_SCANS_ERROR";
export const RESET_SCANS = "RESET_SCANS";

interface GetScansRequestAction {
	type: typeof GET_SCANS_REQUEST;
}

interface GetScansDoneAction {
	type: typeof GET_SCANS_DONE;
}

interface GetScansSuccessAction {
	type: typeof GET_SCANS_SUCCESS;
	scans: ImageScan[];
	endOfList: boolean;
}

interface GetScansErrorAction {
	type: typeof GET_SCANS_ERROR;
	message?: string;
}

interface RestScansAction {
    type : typeof RESET_SCANS;
}

export interface ScansState {
	scansPerPage: number;

	scans: ImageScan[];
	endOfList: boolean;

	isGettingScans: boolean;

	errors: string | null;
}
export type ScanActionTypes = GetScansRequestAction | GetScansSuccessAction | GetScansDoneAction | GetScansErrorAction | RestScansAction;
