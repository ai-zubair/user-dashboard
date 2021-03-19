import { Reducer, combineReducers } from 'redux';
import { setSearchTerm } from './actionCreators';
import { DASH_BOARD_ACTIONS } from './actions';
import { SearchTermAction } from './types';

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

const dashboardReducer = combineReducers({
  searchTerm: searchTermReducer
})

export { dashboardReducer };