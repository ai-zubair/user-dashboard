
import { Dispatch } from 'redux';
import { setUserName, setPassword, toggleSubmitLoader, setLoginError, postLoginData } from './actionCreators';
import { LoginData } from './types';
import { AppState } from '../../data-store/rootReducer';

const mapStateToProps = ({adminAuthData}: AppState) => ({
  username: adminAuthData.authData.username,
  password: adminAuthData.authData.password,
  loginError: adminAuthData.authData.loginError,
  isSubmitLoaderVisible: adminAuthData.isSubmitLoaderVisible
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
  setUserName(username: string){
    dispatch(setUserName(username))
  },
  setPassword(password: string){
    dispatch(setPassword(password))
  },
  setLoginError(error: string){
    dispatch(setLoginError(error))
  },
  toggleSubmitLoader(loaderState: boolean){
    dispatch(toggleSubmitLoader(loaderState))
  },
  postLoginData(loginData: LoginData){
    //@ts-ignore
    dispatch(postLoginData(loginData));
  }
})

export { mapStateToProps, mapDispatchToProps}