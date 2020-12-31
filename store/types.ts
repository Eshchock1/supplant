import {StateType, ActionType} from 'typesafe-actions';
import {rootReducer} from './reducers'
import {types as user} from './user'
import {types as camera} from './camera'
import {types as scans} from './scans'

export type RootState = ReturnType<typeof rootReducer>;

export {
    user, camera, scans
}