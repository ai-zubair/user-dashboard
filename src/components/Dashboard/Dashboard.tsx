import React, { Component, Fragment } from 'react';
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
import Table from '../commons/Table/Table';

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

    const mappedUserData = userData.map(user=>[user.first_name, user.last_name, user.email, user.avatar])

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
          <Table 
            tableHeader={['First Name', 'Last Name', 'Email', 'Avatar']}
            tableBody={mappedUserData}
            showDataLoader={isDataLoaderVisible}
          />
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
