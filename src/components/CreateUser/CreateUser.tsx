import React, {Fragment} from 'react';
import Form from '../commons/DataForm/Form';
import Header from '../commons/Header/Header';
import InputFormField from '../commons/InputField/InputField';
import { CreateUserWrapper } from './CreateUserStyled';
import { FORM_FIELDS } from './constants';

export default function AddUser() {
  return (
    <Fragment>
      <Header />
      <CreateUserWrapper>
        <Form 
          submitButtonText={FORM_FIELDS.SUBMIT.label}
          submitErrorMessage={"Could not add user"}
          isSubmitButtonDisabled={false}
          showSubmitLoader={false} 
          onSubmit={()=>{}} 
        >
        <InputFormField 
            fieldID={FORM_FIELDS.FIRST_NAME.id} 
            fieldLabel={FORM_FIELDS.FIRST_NAME.label} 
            fieldType={"text"}
            fieldValue={"some dummy name"} 
            errorMessage={FORM_FIELDS.FIRST_NAME.errorMessage}
            validator={FORM_FIELDS.FIRST_NAME.validator}
            onFieldChange={(value: string)=>{console.log(value)}} 
          />
        <InputFormField 
            fieldID={FORM_FIELDS.LAST_NAME.id} 
            fieldLabel={FORM_FIELDS.LAST_NAME.label} 
            fieldType={"text"}
            fieldValue={"some dummy name"} 
            errorMessage={FORM_FIELDS.LAST_NAME.errorMessage}
            validator={FORM_FIELDS.LAST_NAME.validator}
            onFieldChange={(value: string)=>{console.log(value)}} 
          />
        <InputFormField 
            fieldID={FORM_FIELDS.USERNAME.id} 
            fieldLabel={FORM_FIELDS.USERNAME.label} 
            fieldType={"text"}
            fieldValue={"dummy@gmail.com"} 
            errorMessage={FORM_FIELDS.USERNAME.errorMessage}
            validator={FORM_FIELDS.USERNAME.validator}
            onFieldChange={(value: string)=>{console.log(value)}} 
          />
        <InputFormField 
            fieldID={FORM_FIELDS.PASSWORD.id} 
            fieldLabel={FORM_FIELDS.PASSWORD.label} 
            fieldType="password"
            fieldValue={"123456"} 
            errorMessage={FORM_FIELDS.PASSWORD.errorMessage}
            validator={FORM_FIELDS.PASSWORD.validator}
            onFieldChange={(value: string)=>{console.log(value)}} 
          />
        </Form>
      </CreateUserWrapper>
    </Fragment>
  )
}
