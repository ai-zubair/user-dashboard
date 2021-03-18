import React, { Component, Fragment } from 'react';
import { Dispatch } from 'redux'; 
import { connect } from 'react-redux';

import Header from '../commons/Header/Header';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';

import { AppState } from '../../data-store/rootReducer';
import { setUserName, setPassword } from './actionCreators';

import { AdminAuthProps } from './types';
import { FORM_FIELDS } from './constants';
import { AdminAuthWrapper } from './AdminAuthStyled';


class AdminAuth extends Component<AdminAuthProps> {

  render() {
    const {
      username,
      password,
      setUserName,
      setPassword
    } = this.props;

    const {
      USERNAME,
      PASSWORD
    } = FORM_FIELDS;

    return (
      <Fragment>
        <Header />
          <AdminAuthWrapper>
            <Form>
              <InputFormField 
                fieldID={USERNAME.id} 
                fieldLabel={USERNAME.label} 
                fieldType={"text"}
                fieldValue={username} 
                errorMessage={USERNAME.errorMessage}
                validator={USERNAME.validator}
                onFieldChange={setUserName} 
              />
              <InputFormField 
                fieldID={PASSWORD.id} 
                fieldLabel={PASSWORD.label} 
                fieldType={"password"}
                fieldValue={password} 
                errorMessage={PASSWORD.errorMessage}
                validator={PASSWORD.validator}
                onFieldChange={setPassword} 
              />
            </Form>
          </AdminAuthWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = ({adminAuthData}: AppState) => ({
  username: adminAuthData.username,
  password: adminAuthData.password
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
  setUserName(username: string){
    dispatch(setUserName(username))
  },
  setPassword(password: string){
    dispatch(setPassword(password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
