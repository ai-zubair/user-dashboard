import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { LoginData, TextInputFieldAction, ToggleSubmitLoaderAction } from './types';

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

export const postLoginData = (loginData: LoginData) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleSubmitLoader(true));
    dispatch(setLoginError(''));
    axios.post('https://reqres.in/api/login',{
      email: loginData.username,
      password: loginData.password
    }).then((response: AxiosResponse)=>{
      console.log(response);
      dispatch(toggleSubmitLoader(false))
    }).catch((error: any)=>{
      dispatch(toggleSubmitLoader(false));
      dispatch(setLoginError('Invalid email/password'))
    });
  }
}