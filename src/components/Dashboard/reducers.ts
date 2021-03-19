import { Reducer, combineReducers } from 'redux';
import { DASH_BOARD_ACTIONS } from './actions';
import { SearchTermAction, UserDataAction, User, ToggleDataLoaderAction, UserCollection } from './types';
import { DEFAULT_SEARCH_TERM, DEFAULT_USER_COLLECTION, DEFAULT_DATA_LOADER_STATE } from './constants';

const searchTermReducer: Reducer<string, SearchTermAction> = (searchTerm = DEFAULT_SEARCH_TERM, {type, payload}) => {
  let newSearchTerm = searchTerm;
  switch(type){
    case DASH_BOARD_ACTIONS.SET_SEARCH_TERM:
      {
        newSearchTerm = payload
      }
  }
  return newSearchTerm;
}

export const userDataReducer: Reducer<UserCollection, UserDataAction> = (userDataCollection = DEFAULT_USER_COLLECTION, {type, payload}) => {
  let newUserData = userDataCollection;
  switch(type){
    case DASH_BOARD_ACTIONS.SET_CUSTOMER_DATA:
      {
        for(const user of payload){
          newUserData[user.id] = Object.assign({}, newUserData[user.id], user);
        }
      }
  }
  return Object.assign({}, userDataCollection, newUserData);
}

export const toggleDataLoaderReducer: Reducer<boolean, ToggleDataLoaderAction> = (dataLoaderState = DEFAULT_DATA_LOADER_STATE, {type, payload}) =>{
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