import { ActionCreator } from 'redux';
import { CREATE_USER_ACTIONS } from './actions';
import { TextFieldAction, ToggleSignUpLoaderAction } from './types';

export const addFirstName: ActionCreator<TextFieldAction> = (firstName: string) => ({
  type: CREATE_USER_ACTIONS.ADD_FIRST_NAME,
  payload: firstName
})

export const addLastName: ActionCreator<TextFieldAction> = (lastName: string) => ({
  type: CREATE_USER_ACTIONS.ADD_LAST_NAME,
  payload: lastName
})

export const addUserEmail: ActionCreator<TextFieldAction> = (email: string) => ({
  type: CREATE_USER_ACTIONS.ADD_USER_NAME,
  payload: email
})

export const addUserPassword: ActionCreator<TextFieldAction> = (password: string) => ({
  type: CREATE_USER_ACTIONS.ADD_PASS_WORD,
  payload: password
})

export const toggleCreateLoader: ActionCreator<ToggleSignUpLoaderAction> = (loaderState: boolean) => ({
  type: CREATE_USER_ACTIONS.TOGGLE_CREATE_LOADER,
  payload: loaderState
})

