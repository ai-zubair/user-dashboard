import React, { Fragment, FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../commons/Header/Header';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';
import { AdminAuthWrapper } from './AdminAuthStyled';
import { AdminAuthProps } from './types';
import { FORM_FIELDS } from './constants';
import { mapStateToProps, mapDispatchToProps } from './storeMappers';



const AdminAuth:FunctionComponent<AdminAuthProps> = (props) => {
  const { username, password, loginError, loginToken, isSubmitLoaderVisible, setUserName, setPassword, postLoginData} = props;
  const { USERNAME, PASSWORD, SUBMIT } = FORM_FIELDS;
  const isLoginButtonDisabled = !USERNAME.VALIDATOR(username) || !PASSWORD.VALIDATOR(password) || isSubmitLoaderVisible;

  if(loginToken){
    return <Redirect to="/dashboard" push />
  }

  return (
    <Fragment>
      <Header />
      <AdminAuthWrapper>
        <Form 
          submitButtonText={SUBMIT.LABEL}
          submitErrorMessage={loginError}
          isSubmitButtonDisabled={isLoginButtonDisabled}
          showSubmitLoader={isSubmitLoaderVisible} 
          onSubmit={()=>postLoginData({username,password})} 
        >
          <InputFormField 
            fieldID={USERNAME.ID} 
            fieldLabel={USERNAME.LABEL} 
            fieldType={"text"}
            fieldValue={username} 
            errorMessage={USERNAME.ERROR_MESSAGE}
            validator={USERNAME.VALIDATOR}
            onFieldChange={setUserName} 
          />
          <InputFormField 
            fieldID={PASSWORD.ID} 
            fieldLabel={PASSWORD.LABEL} 
            fieldType={"password"}
            fieldValue={password} 
            errorMessage={PASSWORD.ERROR_MESSAGE}
            validator={PASSWORD.VALIDATOR}
            onFieldChange={setPassword} 
          />
        </Form>
      </AdminAuthWrapper>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
