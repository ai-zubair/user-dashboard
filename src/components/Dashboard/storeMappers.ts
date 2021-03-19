import { Dispatch } from 'redux';
import { AppState } from '../../data-store/rootReducer';
import { setSearchTerm, getUserData } from './actionCreators';

const mapStateToProps = ({dashboardData}: AppState) => ({
  searchTerm: dashboardData.searchTerm,
  userData: dashboardData.userData,
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