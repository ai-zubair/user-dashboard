export interface AdminAuthState{
  username: string;
  password: string;
}

export interface AdminAuthProps{
  username: string; 
  password: string; 
  setUserName(username: string): void; 
  setPassword(password: string): void;
}

export interface TextInputFieldAction {
  type: string;
  payload: string;
}