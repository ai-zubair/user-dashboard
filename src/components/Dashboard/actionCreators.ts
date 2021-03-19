import axios, { AxiosResponse } from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { DASH_BOARD_ACTIONS } from './actions';
import { SearchTermAction, UserDataAction, User, ToggleDataLoaderAction } from './types';

export const setSearchTerm: ActionCreator<SearchTermAction> = (searchTerm: string) => ({
  type: DASH_BOARD_ACTIONS.SET_SEARCH_TERM,
  payload: searchTerm
})

export const setUserData: ActionCreator<UserDataAction> = (userData: User[]) => ({
  type: DASH_BOARD_ACTIONS.SET_CUSTOMER_DATA,
  payload: userData
})

export const toggleDataLoader: ActionCreator<ToggleDataLoaderAction> = (dataLoaderState: boolean) => ({
  type: DASH_BOARD_ACTIONS.TOGGLE_DATA_LOADER,
  payload: dataLoaderState
})

export const getUserData = () => {
  return (dispatch: Dispatch)=>{
    dispatch(toggleDataLoader(true));
    axios.get('https://reqres.in/api/users').then((response: AxiosResponse) => {
      dispatch(setUserData(response.data.data));
      dispatch(toggleDataLoader(false));
    }).catch((error: any)=>{
      
    })
  }
}