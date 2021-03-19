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