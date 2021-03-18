import React, { FunctionComponent, ReactChild } from 'react';
import { FormWrapper } from './FormStyled';
import Button from '../Button/Button';

interface FormProps{
  children?: ReactChild[];
  submitButtonText: string;
  isSubmitButtonDisabled: boolean;
  showSubmitLoader: boolean;
  onSubmit(): void;
}

const Form: FunctionComponent<FormProps> = ({children, submitButtonText, onSubmit, showSubmitLoader, isSubmitButtonDisabled}) => {
  return (
    <FormWrapper onSubmit={isSubmitButtonDisabled ? (event) => {event.preventDefault()}: (event)=>{event.preventDefault(),onSubmit()}}>
      {children}
      <Button 
        showLoader={showSubmitLoader} 
        isButtonDisabled={isSubmitButtonDisabled} 
        buttonText={submitButtonText}
      />
    </FormWrapper>
  )
}

export default Form;
