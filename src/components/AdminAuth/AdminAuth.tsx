import React, { Component, Fragment } from 'react';
import Header from '../commons/Header/Header';
import { AdminAuthWrapper } from './AdminAuthStyled';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';
class AdminAuth extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          <AdminAuthWrapper>
            <Form>
              <InputFormField fieldLabel={'Username'} fieldID={'user-name'} fieldType={"text"}/>
              <InputFormField fieldLabel={'Password'} fieldID={'password'} fieldType={"password"}/>
            </Form>
          </AdminAuthWrapper>
      </Fragment>
    )
  }
}

export default AdminAuth;
