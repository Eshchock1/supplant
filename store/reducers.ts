import {combineReducers, ReducerFromReducersMapObject} from 'redux';
import user from './user/reducers'
import camera from './camera/reducers'
import scans from './scans/reducers'



export const rootReducer = combineReducers({user, camera, scans});
