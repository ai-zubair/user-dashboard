import React, { Fragment, FunctionComponent} from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Form from '../commons/DataForm/Form';
import Header from '../commons/Header/Header';
import InputFormField from '../commons/InputField/InputField';
import { CreateUserWrapper } from './CreateUserStyled';
import { FORM_FIELDS } from './constants';
import { CreateUserProps } from './types';
import { AppState } from '../../data-store/rootReducer';
import { addFirstName, addLastName, addUserEmail, addUserPassword } from './actionCreators';

const AddUser: FunctionComponent<CreateUserProps> = (props) => {

  const {
    email,
    password,
    firstName,
    lastName,
    signUpError,
    isSignUpLoaderVisible,
    addFirstName,
    addLastName,
    addPassword,
    addEmail
  } = props;

  const {
    FIRST_NAME,
    LAST_NAME,
    USERNAME,
    PASSWORD,
    SUBMIT
  } = FORM_FIELDS;

  const isSignUpButtonDisabled = !FIRST_NAME.validator(firstName) || !LAST_NAME.validator(lastName) || !USERNAME.validator(email) || !PASSWORD.validator(password) || isSignUpLoaderVisible;

  return (
    <Fragment>
      <Header />
      <CreateUserWrapper>
        <Form 
          submitButtonText={SUBMIT.label}
          submitErrorMessage={signUpError}
          isSubmitButtonDisabled={isSignUpButtonDisabled}
          showSubmitLoader={isSignUpLoaderVisible} 
          onSubmit={()=>{}} 
        >
        <InputFormField 
            fieldID={FIRST_NAME.id} 
            fieldLabel={FIRST_NAME.label} 
            fieldType={"text"}
            fieldValue={firstName} 
            errorMessage={FIRST_NAME.errorMessage}
            validator={FIRST_NAME.validator}
            onFieldChange={addFirstName} 
          />
        <InputFormField 
            fieldID={LAST_NAME.id} 
            fieldLabel={LAST_NAME.label} 
            fieldType={"text"}
            fieldValue={lastName} 
            errorMessage={LAST_NAME.errorMessage}
            validator={LAST_NAME.validator}
            onFieldChange={addLastName} 
          />
        <InputFormField 
            fieldID={USERNAME.id} 
            fieldLabel={USERNAME.label} 
            fieldType={"text"}
            fieldValue={email} 
            errorMessage={USERNAME.errorMessage}
            validator={USERNAME.validator}
            onFieldChange={addEmail} 
          />
        <InputFormField 
            fieldID={PASSWORD.id} 
            fieldLabel={PASSWORD.label} 
            fieldType="password"
            fieldValue={password} 
            errorMessage={PASSWORD.errorMessage}
            validator={PASSWORD.validator}
            onFieldChange={addPassword} 
          />
        </Form>
      </CreateUserWrapper>
    </Fragment>
  )
}

const mapStateToProps = ({createNewUserData}: AppState) => ({
  firstName: createNewUserData.userData.firstName,
  lastName: createNewUserData.userData.lastName,
  email: createNewUserData.userData.email,
  password: createNewUserData.userData.password,
  signUpError: createNewUserData.userData.signUpError,
  isSignUpLoaderVisible: createNewUserData.isSignUpLoaderVisible
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addFirstName(firstName: string){
    dispatch(addFirstName(firstName))
  },
  addLastName(lastName: string){
    dispatch(addLastName(lastName))
  },
  addPassword(password: string){
    dispatch(addUserPassword(password))
  },
  addEmail(email: string){
    dispatch(addUserEmail(email))
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
