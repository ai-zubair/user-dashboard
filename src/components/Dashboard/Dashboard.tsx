import React, { Component, Fragment, FunctionComponent, ReactChild } from 'react';
import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import InputField from '../commons/InputField/InputField';
import { DashboardWrapper, SearchBarWrapper, AddUserButtonWrapper, UserAvatarWrapper, ActionButtonsWrapper } from './DashboardStyled';
import { AppState } from '../../data-store/rootReducer';
import { Dispatch } from 'redux';
import { setSearchTerm, getUserData } from './actionCreators';
import { connect } from 'react-redux';
import { DashboardProps, User } from './types';
import Table from '../commons/Table/Table';


const UserAvatar: FunctionComponent<{avatarURL: string; altText: string;}> = ({avatarURL, altText}) => {
  return(
    <UserAvatarWrapper>
      <img src={avatarURL} alt={altText} />
    </UserAvatarWrapper>
  )
}

const ActionButtons: FunctionComponent<{userID: number}> = ({userID}) => {
  return(
    <ActionButtonsWrapper>
      <Button buttonText="Edit" onButtonClick={()=>{console.log()}}/>
      <Button buttonText="Delete" onButtonClick={()=>{}}/>
    </ActionButtonsWrapper>
  );
} 

class Dashboard extends Component<DashboardProps> {


  mapUserData = (userData: User[]): ReactChild[][] => {

    return userData.map( user => [
      user.first_name,
      user.last_name,
      user.email,
      <UserAvatar avatarURL={user.avatar} altText={user.first_name} />,
      <ActionButtons userID={user.id}/>
    ])
  }

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

    const mappedUserData = this.mapUserData(userData);

    return (
      <Fragment>
        <Header>
          <SearchBarWrapper>
            <InputField 
              hideLabel={true}
              fieldType="text"
              fieldID="search"
              fieldValue={searchTerm}
              fieldPlaceholder="Search for customer names, emails ..."
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
            tableHeader={['First Name', 'Last Name', 'Email', 'Avatar', 'Actions']}
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
  userData: Object.values(dashboardData.userData),
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
