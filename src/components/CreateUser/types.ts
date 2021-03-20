import { match } from "react-router";
import { UserCollection } from "../Dashboard/types";

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
  match: match<{id?: string}>;
  history:{
    push(url:string): void;
  }
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  signUpError: string;
  isEditRoute: boolean;
  isUserModified: boolean;
  isSignUpLoaderVisible: boolean;
  existingUsers: UserCollection;
  addEmail(email: string): void;
  addLastName(lastName: string): void;
  addPassword(password: string): void;
  addFirstName(firstName: string): void;
  postNewUserData(userData: NewUser): void;
  updateUserData(userData: NewUser, id: string): void;
  toggleUserModified(modificationState: boolean): void;
}

export interface TextFieldAction{
  type: string;
  payload: string;
}

export interface ToggleSignUpLoaderAction{
  type: string;
  payload: boolean;
}