import React, { Component, Fragment } from 'react';
import axios, { AxiosResponse } from 'axios';
import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import InputField from '../commons/InputField/InputField';
import { DashboardWrapper, SearchBarWrapper, AddUserButtonWrapper } from './DashboardStyled';
import { AppState } from '../../data-store/rootReducer';
import { Dispatch } from 'redux';
import { setSearchTerm } from './actionCreators';
import { connect } from 'react-redux';
import { DashboardProps } from './types';

class Dashboard extends Component<DashboardProps> {

  componentDidMount(){
    axios.get('https://reqres.in/api/users').then((response: AxiosResponse) => console.log(response))
  }

  render() {
    const {
      searchTerm,
      setSearchTerm
    } = this.props;
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

        </DashboardWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = ({dashboardData}: AppState) => ({
  searchTerm: dashboardData.searchTerm,
  userData: dashboardData.userData
});

const mapDispatchToProps = (dipatch: Dispatch) => ({
  setSearchTerm(searchTerm: string){
    dipatch(setSearchTerm(searchTerm))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
