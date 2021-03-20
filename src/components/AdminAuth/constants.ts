import { AuthDataState } from "./types";

export const DEFAULT_AUTH_DATA: AuthDataState = {
  username: '',
  password: '',
  loginError: '',
  loginToken: ''
}

export const DEFAULT_LOADER_STATE = false;

export const AUTH_EROR_MESSAGE =  'Invalid email/password';

export const FORM_FIELDS = {
  USERNAME: {
    ID: "USER_NAME",
    LABEL: 'Email',
    ERROR_MESSAGE: 'Invalid e-mail',
    VALIDATOR: (username: string): boolean => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username),
  },
  PASSWORD: {
    ID: "PASS_WORD",
    LABEL: 'Password',
    ERROR_MESSAGE: 'Invalid Password',
    VALIDATOR: (password: string): boolean => password.length >= 6
  },
  SUBMIT: {
    ID: "SUBMIT",
    LABEL: "Login"
  }
}
