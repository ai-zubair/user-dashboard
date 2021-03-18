import React, { Component, Fragment } from 'react';
import { Dispatch } from 'redux'; 
import { connect } from 'react-redux';
import axios from 'axios';

import Header from '../commons/Header/Header';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';

import { AppState } from '../../data-store/rootReducer';
import { setUserName, setPassword, toggleSubmitLoader } from './actionCreators';

import { AdminAuthProps } from './types';
import { FORM_FIELDS } from './constants';
import { AdminAuthWrapper } from './AdminAuthStyled';


class AdminAuth extends Component<AdminAuthProps> {

  onAuthFormSubmit = () => {
    this.props.toggleSubmitLoader(true);
    axios.post('https://reqres.in/api/login',{
      email: this.props.username,
      password: this.props.password
    }).then( response => {console.log(response), this.props.toggleSubmitLoader(false);});
  }

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

    const isSubmitButtonDisabled = !USERNAME.validator(username) || !PASSWORD.validator(password);

    return (
      <Fragment>
        <Header />
          <AdminAuthWrapper>
            <Form onSubmit={this.onAuthFormSubmit} isSubmitButtonDisabled={isSubmitButtonDisabled}>
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
  password: adminAuthData.authData.password
})

const mapDispatchToProps = (dispatch: Dispatch) =>({
  setUserName(username: string){
    dispatch(setUserName(username))
  },
  setPassword(password: string){
    dispatch(setPassword(password))
  },
  toggleSubmitLoader(loaderState: boolean){
    dispatch(toggleSubmitLoader(loaderState))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
