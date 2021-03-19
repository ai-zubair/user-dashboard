import { NewUser } from './types';

export const FORM_FIELDS = {
  FIRST_NAME:{
    id: "FIRST_NAME",
    label: 'First Name',
    errorMessage: 'Invalid First Name',
    validator: (firstName: string): boolean => firstName.length >= 3
  },
  LAST_NAME:{
    id: "LAST_NAME",
    label: 'Last Name',
    errorMessage: 'Invalid Last Name',
    validator: (firstName: string): boolean => firstName.length >= 3
  },
  USERNAME: {
    id: "USER_NAME",
    label: 'Email',
    errorMessage: 'Invalid e-mail',
    validator: (username: string): boolean => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username),
  },
  PASSWORD: {
    id: "PASS_WORD",
    label: 'Password',
    errorMessage: 'Invalid Password',
    validator: (password: string): boolean => password.length >= 6
  },
  SUBMIT: {
    id: "SUBMIT",
    label: "Create User"
  }
}

export const BACK_BUTTON_LABEL = "Back";

export const DEFAULT_CREATE_USER_STATE: NewUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  signUpError: ''
}

export const DEFAULT_SIGN_UP_LOADER_STATE = false;

export const DEFAULT_USER_MODIFIED_STATE = false;