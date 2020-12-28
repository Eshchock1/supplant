import {combineReducers, ReducerFromReducersMapObject} from 'redux';
import user from './user/reducers'
import camera from './camera/reducers'


export const rootReducer = combineReducers({user, camera});
