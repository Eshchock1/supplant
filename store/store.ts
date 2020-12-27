
import {rootReducer} from './reducers'
import { verifyAuth } from './user/actions';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({reducer: rootReducer})
store.dispatch(verifyAuth);
export default store;