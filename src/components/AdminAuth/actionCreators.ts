import { ActionCreator } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { TextInputFieldAction } from './types';

export const setUserName: ActionCreator<TextInputFieldAction> = (username: string) => ({
  type: ADMIN_AUTH_ACTIONS.SET_USER_NAME,
  payload: username
})

export const setPassword: ActionCreator<TextInputFieldAction> = (password: string) => ({
  type: ADMIN_AUTH_ACTIONS.SET_PASS_WORD,
  payload: password
})