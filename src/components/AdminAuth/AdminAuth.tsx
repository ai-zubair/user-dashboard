import React, { Component, Dispatch, Fragment } from 'react';
import { connect } from 'react-redux';
import { setUserName, setPassword } from './actionCreators';
import { AdminAuthProps, AdminAuthState } from './types';
import Header from '../commons/Header/Header';
import { AdminAuthWrapper } from './AdminAuthStyled';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';
import { AppState } from '../../data-store/rootReducer';


class AdminAuth extends Component<AdminAuthProps> {

  render() {
    const {
      username,
      password,
      setUserName,
      setPassword
    } = this.props;

    return (
      <Fragment>
        <Header />
          <AdminAuthWrapper>
            <Form>
              <InputFormField 
                fieldLabel={'Username'} 
                fieldID={'user-name'} 
                fieldType={"text"}
                fieldValue={username} 
                onFieldChange={setUserName} 
              />
              <InputFormField 
                fieldLabel={'Password'} 
                fieldID={'password'} 
                fieldType={"password"}
                fieldValue={password} 
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

const mapDispatchToProps = (dispatch: Dispatch<{type: string;payload: string}>) =>({
  setUserName(username: string){
    dispatch(setUserName(username))
  },
  setPassword(password: string){
    dispatch(setPassword(password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
