import { ActionCreator } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { TextInputFieldAction, ToggleSubmitLoaderAction } from './types';

export const setUserName: ActionCreator<TextInputFieldAction> = (username: string) => ({
  type: ADMIN_AUTH_ACTIONS.SET_USER_NAME,
  payload: username
})

export const setPassword: ActionCreator<TextInputFieldAction> = (password: string) => ({
  type: ADMIN_AUTH_ACTIONS.SET_PASS_WORD,
  payload: password
})

export const setLoginError: ActionCreator<TextInputFieldAction> = (error: string ) => ({
  type: ADMIN_AUTH_ACTIONS.SET_LOGIN_ERROR,
  payload: error
})

export const toggleSubmitLoader: ActionCreator<ToggleSubmitLoaderAction> = (loaderState: boolean) => ({
  type: ADMIN_AUTH_ACTIONS.TOGGLE_SUBMIT_LOADER,
  payload: loaderState
})