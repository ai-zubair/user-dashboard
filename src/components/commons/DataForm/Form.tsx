import React, { FunctionComponent, ReactChild } from 'react';
import { FormWrapper } from './FormStyled';
import Button from '../Button/Button';

interface FormProps{
  children?: ReactChild[];
  submitButtonText: string;
  isSubmitButtonDisabled: boolean;
  showSubmitLoader: boolean;
  submitErrorMessage?: string;
  onSubmit(): void;
}

const Form: FunctionComponent<FormProps> = ({children, submitButtonText, onSubmit, showSubmitLoader, submitErrorMessage, isSubmitButtonDisabled}) => {
  return (
    <FormWrapper onSubmit={(event) => {event.preventDefault(); !isSubmitButtonDisabled && onSubmit()}}>
      {children}
      <Button 
        showLoader={showSubmitLoader} 
        isButtonDisabled={isSubmitButtonDisabled} 
        buttonText={submitButtonText}
        errorMessage={submitErrorMessage}
      />
    </FormWrapper>
  )
}

export default Form;
