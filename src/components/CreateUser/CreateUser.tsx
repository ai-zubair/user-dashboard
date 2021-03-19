import React, { Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router';

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
    this.props.addFirstName(existingUser.first_name);
    this.props.addLastName(existingUser.last_name);
    this.props.addEmail(existingUser.email);
  }

  flushState = () => {
    this.props.addFirstName('');
    this.props.addLastName('');
    this.props.addEmail('');
    this.props.addPassword('');
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
      isUserModified,
      toggleUserModified,
      postNewUserData
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
  
    if(isEditRoute && !existingUser){
      return <Redirect to="/dashboard" push />
    }
  
    if(needToPopulateState){
      this.populateState(existingUser);
    }
  
    const isSignUpButtonDisabled =  !FIRST_NAME.validator(firstName) || 
                                    !LAST_NAME.validator(lastName) || 
                                    !USERNAME.validator(email) || 
                                    (isEditRoute ? false : !PASSWORD.validator(password)) || 
                                    isSignUpLoaderVisible;
  
    if(isUserModified){
      Promise.resolve(true).then(()=>toggleUserModified(false));
      return <Redirect to="/dashboard" push />;
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
            onSubmit={()=>postNewUserData({firstName, lastName, email, password, signUpError})} 
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

export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);
