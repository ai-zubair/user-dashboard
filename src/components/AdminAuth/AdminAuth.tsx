import React, { Fragment, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../commons/Header/Header';
import Form from '../commons/DataForm/Form';
import InputFormField from '../commons/InputField/InputField';
import { AdminAuthWrapper } from './AdminAuthStyled';
import { AdminAuthProps } from './types';
import { FORM_FIELDS } from './constants';
import { mapStateToProps, mapDispatchToProps } from './storeMappers';


const AdminAuth:FunctionComponent<AdminAuthProps> = (props) => {
  const { username, password, loginError, setUserName, setPassword, isSubmitLoaderVisible, postLoginData} = props;
  const { USERNAME, PASSWORD, SUBMIT } = FORM_FIELDS;
  const isLoginButtonDisabled = !USERNAME.validator(username) || !PASSWORD.validator(password) || isSubmitLoaderVisible;

  return (
    <Fragment>
      <Header />
      <AdminAuthWrapper>
        <Form 
          submitButtonText={SUBMIT.label}
          submitErrorMessage={loginError}
          isSubmitButtonDisabled={isLoginButtonDisabled}
          showSubmitLoader={isSubmitLoaderVisible} 
          onSubmit={()=>{postLoginData({username,password})}} 
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
