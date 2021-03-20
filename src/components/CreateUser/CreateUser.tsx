import React, { Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from '../commons/DataForm/Form';
import Header from '../commons/Header/Header';
import Button from '../commons/Button/Button';
import InputFormField from '../commons/InputField/InputField';
import { CreateUserWrapper } from './CreateUserStyled';
import { AddUserButtonWrapper } from '../Dashboard/DashboardStyled';
import { mapStateToProps, mapDispatchToProps } from './storeMappers';
import { CreateUserProps } from './types';
import { FORM_FIELDS, BACK_BUTTON_LABEL } from './constants';
import { User } from '../Dashboard/types';

class CreateUser extends Component<CreateUserProps>{

  populateState = (existingUser: User) => {
    const { addFirstName, addLastName, addEmail} = this.props;
    addFirstName(existingUser.first_name);
    addLastName(existingUser.last_name);
    addEmail(existingUser.email);
  }

  flushState = () => {
    const {addFirstName, addLastName, addEmail, addPassword} = this.props;
    addFirstName('');
    addLastName('');
    addEmail('');
    addPassword('');
  }

  static getDerivedStateFromProps(nextProps: CreateUserProps) {
    let {
      isEditRoute,
      isUserModified,
      toggleUserModified,
    } = nextProps;
    const id = nextProps?.match?.params?.id;
    const existingUser = nextProps.existingUsers[Number(id)];
    if(isUserModified){
      toggleUserModified(false);
      nextProps.history.push('/dashboard');
    }
    if(isEditRoute && !existingUser){
      nextProps.history.push('/dashboard');
    }
  }

  componentWillUnmount(){
    this.flushState();
  }

  render(){
    let {
      email,
      password,
      firstName,
      lastName,
      signUpError,
      isSignUpLoaderVisible,
      isEditRoute,
      addFirstName,
      addLastName,
      addPassword,
      addEmail,
      postNewUserData,
      updateUserData
    } = this.props;
  
    const {
      FIRST_NAME,
      LAST_NAME,
      USERNAME,
      PASSWORD,
      SUBMIT
    } = FORM_FIELDS;
  
    const id = this.props?.match?.params?.id;
    const existingUser = this.props.existingUsers[Number(id)];
    const needToPopulateState = isEditRoute && (!email || existingUser.email !== email);
    const submitButtonHandler = isEditRoute && id &&existingUser ? () => updateUserData({firstName,lastName,email,password,signUpError},id) : () => postNewUserData({firstName,lastName,email,password,signUpError});
    const isSignUpButtonDisabled =  !FIRST_NAME.validator(firstName) || 
                                    !LAST_NAME.validator(lastName) || 
                                    !USERNAME.validator(email) || 
                                    (isEditRoute ? false : !PASSWORD.validator(password)) || 
                                    isSignUpLoaderVisible;
  
    if(needToPopulateState){
      this.populateState(existingUser);
    }
  
    return (
      <Fragment>
        <Header>
          <AddUserButtonWrapper>
            <Link to="/dashboard">
              <Button
                buttonText={BACK_BUTTON_LABEL}
              />
            </Link>
          </AddUserButtonWrapper>
        </Header>
        <CreateUserWrapper>
          <Form 
            submitButtonText={ isEditRoute ? "Update" : SUBMIT.label}
            submitErrorMessage={signUpError}
            isSubmitButtonDisabled={isSignUpButtonDisabled}
            showSubmitLoader={isSignUpLoaderVisible} 
            onSubmit={submitButtonHandler} 
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
              isHidden={isEditRoute}
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
}

//@ts-ignore
export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);
