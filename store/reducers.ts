import {combineReducers, ReducerFromReducersMapObject} from 'redux';
import { userReducer as user } from './user/reducers'

export const rootReducer = combineReducers({user});
