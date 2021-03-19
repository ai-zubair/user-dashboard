import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { CREATE_USER_ACTIONS } from './actions';
import { NewUser, TextFieldAction, ToggleSignUpLoaderAction } from './types';

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
}
)
export const setSignUpError: ActionCreator<TextFieldAction> = (error: string) => ({
  type: CREATE_USER_ACTIONS.SET_SIGN_UP_ERROR,
  payload: error
})



export const toggleSignUpLoader: ActionCreator<ToggleSignUpLoaderAction> = (loaderState: boolean) => ({
  type: CREATE_USER_ACTIONS.TOGGLE_CREATE_LOADER,
  payload: loaderState
})

export const postNewUserData = (userData: NewUser) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleSignUpLoader(true));
    axios.post('https://reqres.in/api/users',{
      ...userData
    }).then((response)=>{
      dispatch(toggleSignUpLoader(false));
      dispatch(setSignUpError(''));
    }).catch((error: any)=>{
      dispatch(setSignUpError("Could not create User"));
      dispatch(toggleSignUpLoader(false));
    })
  }
}
