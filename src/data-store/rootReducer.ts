import { combineReducers } from 'redux';
import { adminAuthReducer } from '../components/AdminAuth/reducers';
import { AdminAuthState } from '../components/AdminAuth/types';

export interface AppState{
  adminAuthData: AdminAuthState
}

const rootReducer = combineReducers({
  adminAuthData: adminAuthReducer
})

export {rootReducer};