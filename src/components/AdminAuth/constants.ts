import { AdminAuthState } from './types';

export const DEFAULT_ADMIN_AUTH_STATE: AdminAuthState = {
  username: '',
  password: ''
}


export const FORM_FIELDS = {
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
  }
}
