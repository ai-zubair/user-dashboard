import React, { Component, Fragment } from 'react';
import { Dispatch } from 'redux'; 
import { connect } from 'react-redux';
import axios from 'axios';

import Header from '../commons/Header/Header';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';

import { AppState } from '../../data-store/rootReducer';
import { setUserName, setPassword, toggleSubmitLoader, setLoginError } from './actionCreators';

import { AdminAuthProps } from './types';
import { FORM_FIELDS } from './constants';
import { AdminAuthWrapper } from './AdminAuthStyled';


class AdminAuth extends Component<AdminAuthProps> {

  onAuthFormSubmit = () => {
    this.props.toggleSubmitLoader(true);
    axios.post('https://reqres.in/api/login',{
      email: this.props.username,
      password: this.props.password
    }).then( response => {console.log(response), this.props.toggleSubmitLoader(false);}).catch( err => {this.props.toggleSubmitLoader(false);this.props.setLoginError('Invalid Email/Password')});
  }

  render() {
    const {
      username,
      password,
      loginError,
      setUserName,
      setPassword,
      isSubmitLoaderVisible,
    } = this.props;

    const {
      USERNAME,
      PASSWORD
    } = FORM_FIELDS;

    const isSubmitButtonDisabled = !USERNAME.validator(username) || !PASSWORD.validator(password) || isSubmitLoaderVisible;

    return (
      <Fragment>
        <Header />
          <AdminAuthWrapper>
            <Form 
              onSubmit={this.onAuthFormSubmit} 
              showSubmitLoader={isSubmitLoaderVisible} 
              submitButtonText={"Login"}
              submitErrorMessage={loginError}
              isSubmitButtonDisabled={isSubmitButtonDisabled}
            >
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
  username: adminAuthData.authData.username,
  password: adminAuthData.authData.password,
  loginError: adminAuthData.authData.loginError,
  isSubmitLoaderVisible: adminAuthData.isSubmitLoaderVisible
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
  setUserName(username: string){
    dispatch(setUserName(username))
  },
  setPassword(password: string){
    dispatch(setPassword(password))
  },
  setLoginError(error: string){
    dispatch(setLoginError(error))
  },
  toggleSubmitLoader(loaderState: boolean){
    dispatch(toggleSubmitLoader(loaderState))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
