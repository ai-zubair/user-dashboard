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
  userModified: boolean;
  isSignUpLoaderVisible: boolean;
}

export interface CreateUserProps{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  signUpError: string;
  isUserModified: boolean;
  isSignUpLoaderVisible: boolean;
  addFirstName(firstName: string): void;
  addLastName(lastName: string): void;
  addPassword(password: string): void;
  addEmail(email: string): void;
  toggleUserModified(modificationState: boolean): void;
  postNewUserData(userData: NewUser): void;
}