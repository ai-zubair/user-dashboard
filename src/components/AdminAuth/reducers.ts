import { Reducer } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { DEFAULT_ADMIN_AUTH_STATE } from './constants';
import { AdminAuthState, TextInputFieldAction } from './types';

const adminAuthReducer: Reducer<AdminAuthState, TextInputFieldAction> = (adminAuthState = DEFAULT_ADMIN_AUTH_STATE, {type, payload}): AdminAuthState => {
  const newAdminAuthState = DEFAULT_ADMIN_AUTH_STATE;
  switch(type){
    case ADMIN_AUTH_ACTIONS.SET_USER_NAME:
      {
        newAdminAuthState.username = payload;
        break;  
      } 
    case ADMIN_AUTH_ACTIONS.SET_PASS_WORD:
      {
        newAdminAuthState.password = payload;
        break;
      }
  }

  return Object.assign({}, adminAuthState, newAdminAuthState);
}

export { adminAuthReducer };