import { combineReducers, Reducer } from "redux";
import { TextInputFieldAction } from "../AdminAuth/types";
import { CREATE_USER_ACTIONS } from "./actions";
import { NewUser, ToggleSignUpLoaderAction } from './types';

const DEFAULT_CREATE_USER_STATE: NewUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  signUpError: ''
}

const newUserDataReducer: Reducer<NewUser, TextInputFieldAction> = (userData = DEFAULT_CREATE_USER_STATE, { type, payload }) => {
  const newUserData = userData;
  switch(type){
    case CREATE_USER_ACTIONS.ADD_FIRST_NAME: 
      {
        newUserData.firstName = payload;
        break;
      }
    case CREATE_USER_ACTIONS.ADD_LAST_NAME:
      {
        newUserData.lastName = payload;
        break;
      }
    case CREATE_USER_ACTIONS.ADD_USER_NAME:
      {
        newUserData.email = payload;
        break;
      }
    case CREATE_USER_ACTIONS.ADD_PASS_WORD:
      {
        newUserData.password = payload;
        break;
      }
    case CREATE_USER_ACTIONS.SET_SIGN_UP_ERROR:
      {
        newUserData.signUpError = payload;
        break;
      }
  }
  return Object.assign({}, userData, newUserData);
}

const DEFAULT_SIGN_UP_LOADER_STATE = false;

const signUpLoaderReducer: Reducer<boolean, ToggleSignUpLoaderAction> = (signUpLoaderState = DEFAULT_SIGN_UP_LOADER_STATE, {type, payload}): boolean => {
  let newLoaderState = signUpLoaderState;
  switch(type){
    case CREATE_USER_ACTIONS.TOGGLE_CREATE_LOADER:
      {
        newLoaderState = payload;
        break;
      }
  }

  return newLoaderState;
} 

const createUserReducer = combineReducers({
  userData: newUserDataReducer,
  isSignUpLoaderVisible: signUpLoaderReducer
})

export {createUserReducer};