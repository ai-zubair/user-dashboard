export interface AuthDataState{
  username: string;
  password: string;
  loginError: string;
  loginToken: string;
}

export interface AdminAuthState{
  authData: AuthDataState;
  isSubmitLoaderVisible: boolean;
}

export interface AdminAuthProps{
  username: string; 
  password: string; 
  loginError: string;
  loginToken: string;
  isSubmitLoaderVisible: boolean;
  setUserName(username: string): void; 
  setPassword(password: string): void;
  setLoginError(error: string): void;
  toggleSubmitLoader(loaderState: boolean): void;
  postLoginData(loginData: LoginData): void;
}

export interface TextInputFieldAction {
  type: string;
  payload: string;
}

export interface ToggleSubmitLoaderAction{
  type: string;
  payload: boolean;
}

export interface LoginData{
  username: string;
  password: string;
}