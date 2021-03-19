export interface SearchTermAction{
  type: string;
  payload: string;
}

export interface DeleteUserAction{
  type: string;
  payload: number;
}
export interface UserDataAction{
  type: string;
  payload: User[]
}

export interface ToggleDataLoaderAction{
  type: string;
  payload: boolean
}

export interface User{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserCollection{
  [userID: number]: User;
}
export interface DashboardState{
  searchTerm: string;
  userData: UserCollection;
  isDataLoaderVisible: boolean;
}

export interface DashboardProps{
  searchTerm: string;
  userData: User[];
  isDataLoaderVisible: boolean;
  setSearchTerm(searchTerm: string): void;
  getUserData(): void;
  removeUser(userID: number): void;
}