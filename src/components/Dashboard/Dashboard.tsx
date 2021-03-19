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
import { SEARCH_BAR_CONFIG, TABLE_CONFIG, ADD_USER_BUTTON_LABEL, DIALOG_BOX_CONFIG } from './constants';
import { DashboardProps, User } from './types';


interface ActionButtonsProps{
  userID: number;
  children: ReactChild[];
}

interface MapperConfig{
  searchTerm: string;
  actionHandlers: {
    setDialogBoxOpen(dialogBoxState: boolean): void;
  }
}
namespace Utils{
  export const ActionButtons: FunctionComponent<ActionButtonsProps> = ({children}) => {
    return(
      <ActionButtonsWrapper>
        {children}
      </ActionButtonsWrapper>
    );
  } 
  
  export const mapUserDataToTableTuples = (userData: User[], mapperConfig: MapperConfig): [ReactChild[][], string[]] => {
    const {
      searchTerm, 
      actionHandlers:{
        setDialogBoxOpen
      }
    } = mapperConfig;
    const searchFilteredUsers = userData.filter( user => TABLE_CONFIG.USER_CONTAINS_SEARCH_TERM(user, searchTerm));
    const usersMappedToRowItems = searchFilteredUsers.map( user => [
      user.first_name,
      user.last_name,
      user.email,
      <Avatar avatarURL={user.avatar} altText={user.first_name} />,
      <ActionButtonsWrapper>
        <Route 
          render={({history}) => 
           <Button 
            buttonText={TABLE_CONFIG.ACTION_BUTTONS_LABELS.EDIT} 
            onButtonClick={()=>history.push(`/edit-user/${user.id}`)}
           />} 
        />
        <Button 
          buttonText={TABLE_CONFIG.ACTION_BUTTONS_LABELS.DELETE} 
          onButtonClick={()=>setDialogBoxOpen(true)}
        />
      </ActionButtonsWrapper> 
    ])
    const userRowKeys = TABLE_CONFIG.TUPLE_KEY_GEN(searchFilteredUsers);
    return [usersMappedToRowItems, userRowKeys]
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

  const {
    searchTerm,
    userData,
    setSearchTerm,
    isDataLoaderVisible
  } = props;


  const mapperConfig = {
    searchTerm, 
    actionHandlers: {
      setDialogBoxOpen
    }
  }

  const [mappedUsers, tupleKeys] = Utils.mapUserDataToTableTuples(userData, mapperConfig);

  useEffect(() => {
    const { userData } = props;
    const recordsAlreadyFetched = userData.length >= 6;
    if(!recordsAlreadyFetched){
      props.getUserData();
    }
  })

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
          dialogLabel={DIALOG_BOX_CONFIG.LABEL}
          optionOneColor={DIALOG_BOX_CONFIG.CANCEL_BUTTON.COLOR}
          optionOneLabel={DIALOG_BOX_CONFIG.CANCEL_BUTTON.LABEL}
          onOptionOneClick={()=>setDialogBoxOpen(false)}
          optionTwoColor={DIALOG_BOX_CONFIG.DELETE_BUTTON.COLOR}
          optionTwoLabel={DIALOG_BOX_CONFIG.DELETE_BUTTON.LABEL}
          onOptionTwoClick={()=>setDialogBoxOpen(false)}
        />
      </DashboardWrapper>
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
