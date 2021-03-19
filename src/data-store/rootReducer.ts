import { combineReducers } from 'redux';
import { adminAuthReducer } from '../components/AdminAuth/reducers';
import { AdminAuthState } from '../components/AdminAuth/types';
import { dashboardReducer } from '../components/Dashboard/reducers';
import { DashboardState } from '../components/Dashboard/types';

export interface AppState{
  adminAuthData: AdminAuthState,
  dashboardData: DashboardState
}

const rootReducer = combineReducers({
  adminAuthData: adminAuthReducer,
  dashboardData: dashboardReducer
})

export {rootReducer};