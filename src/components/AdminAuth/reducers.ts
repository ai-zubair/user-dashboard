import { Reducer, combineReducers } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { DEFAULT_AUTH_DATA, DEFAULT_LOADER_STATE } from './constants';
import { AuthDataState, TextInputFieldAction, ToggleSubmitLoaderAction } from './types';

const authDataReducer: Reducer<AuthDataState, TextInputFieldAction> = (authData = DEFAULT_AUTH_DATA, {type, payload}): AuthDataState => {
  const newAuthData = authData;
  switch(type){
    case ADMIN_AUTH_ACTIONS.SET_USER_NAME:
      {
        newAuthData.username = payload;
        break;  
      } 
    case ADMIN_AUTH_ACTIONS.SET_PASS_WORD:
      {
        newAuthData.password = payload;
        break;
      }
    case ADMIN_AUTH_ACTIONS.SET_LOGIN_ERROR:
      {
        newAuthData.loginError = payload;
        break;
      }
    case ADMIN_AUTH_ACTIONS.SET_LOGIN_TOKEN: 
      {
        newAuthData.loginToken = payload;
      }
  }

  return Object.assign({}, authData, newAuthData);
}

const submitLoaderReducer: Reducer<boolean, ToggleSubmitLoaderAction> = (submitLoaderState = DEFAULT_LOADER_STATE, {type, payload}): boolean => {
  let newLoaderState = submitLoaderState;
  switch(type){
    case ADMIN_AUTH_ACTIONS.TOGGLE_SUBMIT_LOADER:
      {
        newLoaderState = payload;
        break;
      }
  }

  return newLoaderState;
} 

const adminAuthReducer = combineReducers({
  authData: authDataReducer,
  isSubmitLoaderVisible: submitLoaderReducer
})
export { adminAuthReducer };