import { Reducer, combineReducers } from 'redux';
import { DASH_BOARD_ACTIONS } from './actions';
import { SearchTermAction, UserDataAction, User, ToggleDataLoaderAction } from './types';

const searchTermReducer: Reducer<string, SearchTermAction> = (searchTerm = '', {type, payload}) => {
  let newSearchTerm = searchTerm;
  switch(type){
    case DASH_BOARD_ACTIONS.SET_SEARCH_TERM:
      {
        newSearchTerm = payload
      }
  }
  return newSearchTerm;
}

const DEFAULT_USER_DATA: User[] = []

export const userDataReducer: Reducer<User[], UserDataAction> = (userData = DEFAULT_USER_DATA, {type, payload}) => {
  let newUserData = [...userData];
  switch(type){
    case DASH_BOARD_ACTIONS.SET_CUSTOMER_DATA:
      {
        newUserData = payload
      }
  }
  return newUserData;
}

export const toggleDataLoaderReducer: Reducer<boolean, ToggleDataLoaderAction> = (dataLoaderState = false, {type, payload}) =>{
  let newDataLoaderState = dataLoaderState;
  switch(type){
    case DASH_BOARD_ACTIONS.TOGGLE_DATA_LOADER: 
      {
        newDataLoaderState = payload;
        break;
      }
  }
  return newDataLoaderState;
}

const dashboardReducer = combineReducers({
  searchTerm: searchTermReducer,
  userData: userDataReducer,
  isDataLoaderVisible: toggleDataLoaderReducer
})

export { dashboardReducer };