import React, { Component, Fragment, FunctionComponent, ReactChild } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import Table from '../commons/Table/Table';
import SearchBar from '../commons/SearchBar/SearchBar';
import Avatar from '../commons/Avatar/Avatar';

import { DashboardWrapper, AddUserButtonWrapper, ActionButtonsWrapper } from './DashboardStyled';
import { mapStateToProps, mapDispatchToProps } from './storeMappers';
import { SEARCH_BAR_CONFIG, TABLE_CONFIG, ADD_USER_BUTTON_LABEL } from './constants';
import { DashboardProps, User } from './types';

namespace Utils{
  export const ActionButtons: FunctionComponent<{userID: number}> = ({userID}) => {
    return(
      <ActionButtonsWrapper>
        <Route render={({history}) => <Button buttonText="Edit" onButtonClick={()=>history.push(`/edit-user/${userID}`)}/> }/>
        <Button buttonText="Delete" onButtonClick={()=>console.log(userID)}/>
      </ActionButtonsWrapper>
    );
  } 
  
  export const mapUserDataToTableTuples = (userData: User[], searchTerm: string): [ReactChild[][], string[]] => {
    const filteredUserData = userData.filter( user => TABLE_CONFIG.USER_CONTAINS_SEARCH(user, searchTerm))
    const mappedUsers = filteredUserData.map( user => [
      user.first_name,
      user.last_name,
      user.email,
      <Avatar avatarURL={user.avatar} altText={user.first_name} />,
      <ActionButtons userID={user.id}/>
    ])
    const tupleKeys = filteredUserData.map( user => String(user.id));
    return[mappedUsers, tupleKeys]
  }
}
class Dashboard extends Component<DashboardProps> {

  componentDidMount(){
    if(!(Object.values(this.props.userData).length > 1)){
      this.props.getUserData();
    }
  }

  render() {
    const {
      searchTerm,
      userData,
      setSearchTerm,
      isDataLoaderVisible
    } = this.props;

    const [mappedUsers, tupleKeys] = Utils.mapUserDataToTableTuples(Object.values(userData), searchTerm);

    return (
      <Fragment>
        <Header>
          <SearchBar 
            searchBarID={SEARCH_BAR_CONFIG.ID}
            searchTerm={searchTerm}
            searchBarPlaceHolder={SEARCH_BAR_CONFIG.PLACEHOLDER}
            onSearchtermChange={setSearchTerm}
          />
          <AddUserButtonWrapper>
            <Link to="/create-user">
              <Button
                buttonText={ADD_USER_BUTTON_LABEL}
              />
            </Link>
          </AddUserButtonWrapper>
        </Header>
        <DashboardWrapper isDataLoaderVisible={isDataLoaderVisible}>
          <Table 
            tableHeader={TABLE_CONFIG.HEADER_LABELS}
            tableBody={mappedUsers}
            tupleKeys={tupleKeys}
            showDataLoader={isDataLoaderVisible}
          />
        </DashboardWrapper>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
