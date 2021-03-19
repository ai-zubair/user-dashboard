import React, { Component, Fragment } from 'react';
import axios, { AxiosResponse } from 'axios';
import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import InputField from '../commons/InputField/InputField';
import { DashboardWrapper, SearchBarWrapper, AddUserButtonWrapper } from './DashboardStyled';
import { AppState } from '../../data-store/rootReducer';
import { Dispatch } from 'redux';
import { setSearchTerm, getUserData } from './actionCreators';
import { connect } from 'react-redux';
import { DashboardProps } from './types';
import { Spinner } from '../commons/Spinner';

class Dashboard extends Component<DashboardProps> {

  componentDidMount(){
    this.props.getUserData();
  }

  render() {
    const {
      searchTerm,
      userData,
      setSearchTerm,
      isDataLoaderVisible
    } = this.props;
    console.log("User Data has arrived", userData);

    const Users = userData.map( (user) => {
      return(
        <div>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
          <span>{user.email}</span>
          <span>{user.id}</span>
        </div>

      )
    } )

    return (
      <Fragment>
        <Header>
          <SearchBarWrapper>
            <InputField 
              hideLabel={true}
              fieldType="text"
              fieldID="search"
              fieldValue={searchTerm}
              fieldPlaceholder="Search for customer names, phone-numbers, emails ..."
              onFieldChange={setSearchTerm}
            />
          </SearchBarWrapper>
          <AddUserButtonWrapper>
            <Button
              buttonText="Add User"
            />
          </AddUserButtonWrapper>
        </Header>
        <DashboardWrapper>
          {isDataLoaderVisible ? <Spinner /> : Users}
        </DashboardWrapper>
      </Fragment>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
