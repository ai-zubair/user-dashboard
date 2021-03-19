import React, { useState, useEffect, Fragment, FunctionComponent, ReactChild } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import Table from '../commons/Table/Table';
import SearchBar from '../commons/SearchBar/SearchBar';
import Avatar from '../commons/Avatar/Avatar';
import DialogBox from '../commons/DialogBox/DialogBox';

import { DashboardWrapper, AddUserButtonWrapper, ActionButtonsWrapper } from './DashboardStyled';
import { mapStateToProps, mapDispatchToProps } from './storeMappers';
import { SEARCH_BAR_CONFIG, TABLE_CONFIG, ADD_USER_BUTTON_LABEL } from './constants';
import { DashboardProps, User } from './types';


interface ActionButtonsProps{
  userID: number;
  children: ReactChild[];
}

namespace Utils{
  export const ActionButtons: FunctionComponent<ActionButtonsProps> = ({children}) => {
    return(
      <ActionButtonsWrapper>
        {children}
      </ActionButtonsWrapper>
    );
  } 
  
  export const mapUserDataToTableTuples = (userData: User[], searchTerm: string, isDialogBoxOpen: boolean, setDialogBoxOpen:(state: boolean)=>void): [ReactChild[][], string[]] => {
    const filteredUserData = userData.filter( user => TABLE_CONFIG.USER_CONTAINS_SEARCH(user, searchTerm))
    const mappedUsers = filteredUserData.map( user => [
      user.first_name,
      user.last_name,
      user.email,
      <Avatar avatarURL={user.avatar} altText={user.first_name} />,
      <ActionButtonsWrapper>
        <Route render={({history}) => <Button buttonText="Edit" onButtonClick={()=>history.push(`/edit-user/${user.id}`)}/> }/>
        <Button buttonText="Delete" onButtonClick={()=>setDialogBoxOpen(!isDialogBoxOpen)}/>
      </ActionButtonsWrapper> 
    ])
    const tupleKeys = filteredUserData.map( user => String(user.id));
    return[mappedUsers, tupleKeys]
  }
}

const OPTION = {
  optionLabel: "OPTION",
  optionColor: "green",
  onOptionClick(){
    console.log('option clicked')
  }
}

const Dashboard: FunctionComponent<DashboardProps> = (props) => {

  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  useEffect(() => {
    const { userData } = props;
    const recordsAlreadyFetched = userData.length >= 6;
    if(!recordsAlreadyFetched){
      props.getUserData();
    }
  })

  const {
    searchTerm,
    userData,
    setSearchTerm,
    isDataLoaderVisible
  } = props;

  const [mappedUsers, tupleKeys] = Utils.mapUserDataToTableTuples(userData, searchTerm, dialogBoxOpen, setDialogBoxOpen);

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
        <DialogBox 
          isDialogBoxShown={dialogBoxOpen}
          dialogLabel={"You're about to permanently delete this user. Are you sure you want to proceed?"}
          options={[OPTION,OPTION]}
        />
      </DashboardWrapper>
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
