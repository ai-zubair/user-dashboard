import { Dispatch } from 'redux';
import { AppState } from '../../data-store/rootReducer';
import { setSearchTerm, getUserData, removeUser } from './actionCreators';
import { User } from './types';

const mapStateToProps = ({dashboardData}: AppState) => ({
  searchTerm: dashboardData.searchTerm,
  userData: Object.values(dashboardData.userData) as User[],
  isDataLoaderVisible: dashboardData.isDataLoaderVisible
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSearchTerm(searchTerm: string){
    dispatch(setSearchTerm(searchTerm))
  },
  getUserData(){
    //@ts-ignore
    dispatch(getUserData())
  },
  removeUser(userID: number){
    //@ts-ignore
    dispatch(removeUser(userID))
  }
});

export {mapStateToProps, mapDispatchToProps};