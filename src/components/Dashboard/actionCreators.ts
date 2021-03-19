import { ActionCreator } from 'redux';
import { DASH_BOARD_ACTIONS } from './actions';
import { SearchTermAction } from './types';

export const setSearchTerm: ActionCreator<SearchTermAction> = (searchTerm: string) => ({
  type: DASH_BOARD_ACTIONS.SET_SEARCH_TERM,
  payload: searchTerm
})