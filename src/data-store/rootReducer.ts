import { combineReducers } from 'redux';
import { adminAuthReducer } from '../components/AdminAuth/reducers';
import { AdminAuthState } from '../components/AdminAuth/types';
import { dashboardReducer } from '../components/Dashboard/reducers';
import { DashboardState } from '../components/Dashboard/types';
import { createUserReducer } from '../components/CreateUser/reducers';
import { CreateNewUserState } from '../components/CreateUser/types';

export interface AppState{
  adminAuthData: AdminAuthState,
  dashboardData: DashboardState,
  createNewUserData: CreateNewUserState 
}

const rootReducer = combineReducers({
  adminAuthData: adminAuthReducer,
  dashboardData: dashboardReducer,
  createNewUserData: createUserReducer
})

export {rootReducer};