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
import { APP_ROUTES } from '../../config/routes';

class CreateUser extends Component<CreateUserProps>{

  id?: string;
  existingUser?: User;

  constructor(props: CreateUserProps){
    super(props);
    const {isEditRoute, email} = props;
    this.id = this.props?.match?.params?.id;
    this.existingUser = this.props.existingUsers[Number(this.id)];
    const needToPopulateState = isEditRoute && (!email || this.existingUser.email !== email);
    if(needToPopulateState){
      this.populateState(this.existingUser);
    }
  } 

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

  componentDidUpdate(prevProps: CreateUserProps) {
    let {
      isEditRoute,
      toggleUserModified
    } = prevProps;
    const {
      isUserModified
    } = this.props;
    const id = prevProps?.match?.params?.id;
    const existingUser = prevProps.existingUsers[Number(id)];
    if(isUserModified){
      toggleUserModified(false);
      prevProps.history.push(APP_ROUTES.DASHBOARD);
    }
    if(isEditRoute && !existingUser){
      prevProps.history.push(APP_ROUTES.DASHBOARD);
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
  
    const submitButtonHandler = isEditRoute && this.id && this.existingUser ? 
                                () => updateUserData({firstName,lastName,email,password,signUpError},this.id as string) : 
                                () => postNewUserData({firstName,lastName,email,password,signUpError});

    const isSignUpButtonDisabled =  !FIRST_NAME.VALIDATOR(firstName) || 
                                    !LAST_NAME.VALIDATOR(lastName) || 
                                    !USERNAME.VALIDATOR(email) || 
                                    (isEditRoute ? false : !PASSWORD.VALIDATOR(password)) || 
                                    isSignUpLoaderVisible;
  
    return (
      <Fragment>
        <Header>
          <AddUserButtonWrapper>
            <Link to={APP_ROUTES.DASHBOARD}>
              <Button
                buttonText={BACK_BUTTON_LABEL}
              />
            </Link>
          </AddUserButtonWrapper>
        </Header>
        <CreateUserWrapper>
          <Form 
            submitButtonText={ isEditRoute ? SUBMIT.UPDATE_LABEL : SUBMIT.LABEL}
            submitErrorMessage={signUpError}
            isSubmitButtonDisabled={isSignUpButtonDisabled}
            showSubmitLoader={isSignUpLoaderVisible} 
            onSubmit={submitButtonHandler} 
          >
          <InputFormField 
              fieldID={FIRST_NAME.ID} 
              fieldLabel={FIRST_NAME.LABEL} 
              fieldType={"text"}
              fieldValue={firstName} 
              errorMessage={FIRST_NAME.ERROR_MESSAGE}
              validator={FIRST_NAME.VALIDATOR}
              onFieldChange={addFirstName} 
            />
          <InputFormField 
              fieldID={LAST_NAME.ID} 
              fieldLabel={LAST_NAME.LABEL} 
              fieldType={"text"}
              fieldValue={lastName} 
              errorMessage={LAST_NAME.ERROR_MESSAGE}
              validator={LAST_NAME.VALIDATOR}
              onFieldChange={addLastName} 
            />
          <InputFormField 
              fieldID={USERNAME.ID} 
              fieldLabel={USERNAME.LABEL} 
              fieldType={"text"}
              fieldValue={email} 
              errorMessage={USERNAME.ERROR_MESSAGE}
              validator={USERNAME.VALIDATOR}
              onFieldChange={addEmail} 
            />
          <InputFormField 
              isHidden={isEditRoute}
              fieldID={PASSWORD.ID} 
              fieldLabel={PASSWORD.LABEL} 
              fieldType="password"
              fieldValue={password} 
              errorMessage={PASSWORD.ERROR_MESSAGE}
              validator={PASSWORD.VALIDATOR}
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
