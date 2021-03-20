import { NewUser } from './types';

export const FORM_FIELDS = {
  FIRST_NAME:{
    ID: "FIRST_NAME",
    LABEL: 'First Name',
    ERROR_MESSAGE: 'Invalid First Name',
    VALIDATOR: (firstName: string): boolean => firstName.length >= 3
  },
  LAST_NAME:{
    ID: "LAST_NAME",
    LABEL: 'Last Name',
    ERROR_MESSAGE: 'Invalid Last Name',
    VALIDATOR: (firstName: string): boolean => firstName.length >= 3
  },
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
    LABEL: "Create User",
    UPDATE_LABEL: "Update User"
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

export const DEFAULT_PROFILE_AVATAR_URL = 'https://images.unsplash.com/photo-1564932436587-c6ea959a4053?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=860&q=80';

export const USER_CREATE_ERROR = "Could not create the User";

export const USER_UPDATE_ERROR = "Could not update the User";