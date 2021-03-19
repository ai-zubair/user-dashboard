import { Dispatch } from 'redux';
import { AppState } from '../../data-store/rootReducer';
import { setSearchTerm, getUserData } from './actionCreators';
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
  }
});

export {mapStateToProps, mapDispatchToProps};