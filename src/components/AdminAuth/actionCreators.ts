import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ADMIN_AUTH_ACTIONS } from './actions';
import { LoginData, TextInputFieldAction, ToggleSubmitLoaderAction } from './types';
import { AUTH_EROR_MESSAGE } from './constants';

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

export const setLoginToken: ActionCreator<TextInputFieldAction> = (loginToken: string) =>({
  type: ADMIN_AUTH_ACTIONS.SET_LOGIN_TOKEN,
  payload: loginToken
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
      dispatch(toggleSubmitLoader(false));
      dispatch(setLoginToken(response.data.token));
    }).catch((error: any)=>{
      dispatch(toggleSubmitLoader(false));
      dispatch(setLoginError(AUTH_EROR_MESSAGE))
    });
  }
}