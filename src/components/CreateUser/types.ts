export interface TextFieldAction{
  type: string;
  payload: string;
}

export interface ToggleSignUpLoaderAction{
  type: string;
  payload: boolean;
}

export interface NewUser{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  signUpError: string;
}

export interface CreateNewUserState{
  userData: NewUser;
  isSignUpLoaderVisible: boolean;
}

export interface CreateUserProps{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  signUpError: string;
  isSignUpLoaderVisible: boolean;
  addFirstName(firstName: string): void;
  addLastName(lastName: string): void;
  addPassword(password: string): void;
  addEmail(email: string): void;
  postNewUserData(userData: NewUser): void;
}