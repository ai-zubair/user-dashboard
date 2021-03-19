import React, { Component, Fragment } from 'react';
import Button from '../commons/Button/Button';
import Header from '../commons/Header/Header';
import InputField from '../commons/InputField/InputField';
import { DashboardWrapper, SearchBarWrapper } from './DashboardStyled';

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <SearchBarWrapper>
            <InputField 
              hideLabel={true}
              fieldType="text"
              fieldID="search"
              fieldValue=""
              fieldPlaceholder="Search for customer names, phone-numbers, emails ..."
              onFieldChange={(value)=>{console.log(value)}}
            />
          </SearchBarWrapper>
          <Button />
        </Header>
        <DashboardWrapper>

        </DashboardWrapper>
      </Fragment>
    )
  }
}
