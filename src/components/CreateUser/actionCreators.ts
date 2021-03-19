import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { batch } from 'react-redux';
import { CREATE_USER_ACTIONS } from './actions';
import { NewUser, TextFieldAction, ToggleSignUpLoaderAction } from './types';
import { setUserData } from '../Dashboard/actionCreators';

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

export const setSignUpError: ActionCreator<TextFieldAction> = (error: string) => ({
  type: CREATE_USER_ACTIONS.SET_SIGN_UP_ERROR,
  payload: error
})

export const toggleUserModififed: ActionCreator<ToggleSignUpLoaderAction> = (modificationState: boolean) => ({
  type: CREATE_USER_ACTIONS.TOGGLE_USER_MODIFIED,
  payload: modificationState
})

export const toggleSignUpLoader: ActionCreator<ToggleSignUpLoaderAction> = (loaderState: boolean) => ({
  type: CREATE_USER_ACTIONS.TOGGLE_CREATE_LOADER,
  payload: loaderState
})

const flushUserCreatedState = (dispatch: Dispatch) => {
  return batch(()=>{
    dispatch(addFirstName(''));
    dispatch(addLastName(''));
    dispatch(addUserEmail(''));
    dispatch(addUserPassword(''));
    dispatch(setSignUpError(''));
  })
}

export const postNewUserData = (userData: NewUser) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleSignUpLoader(true));
    axios.post('https://reqres.in/api/users',{
      ...userData
    }).then((response)=>{
      dispatch(setUserData([{
        id: response.data.id,
        first_name: response.data.firstName,
        last_name: response.data.lastName,
        email: response.data.email,
        avatar: 'https://images.unsplash.com/photo-1564932436587-c6ea959a4053?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=860&q=80',
      }]))
      batch(()=>{
        dispatch(toggleSignUpLoader(false));
        flushUserCreatedState(dispatch);
        dispatch(toggleUserModififed(true));
      })
    }).catch((error: any)=>{
      dispatch(setSignUpError("Could not create the User"));
      dispatch(toggleSignUpLoader(false));
    })
  }
}
