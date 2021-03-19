export interface SearchTermAction{
  type: string;
  payload: string;
}

export interface DashboardState{
  searchTerm: string;
  userData: []
}

export interface DashboardProps{
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
}