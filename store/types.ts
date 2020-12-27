import {StateType, ActionType} from 'typesafe-actions';
import {rootReducer} from './reducers'
import {types as user} from './user'
export type RootState = ReturnType<typeof rootReducer>;

export {
    user
}