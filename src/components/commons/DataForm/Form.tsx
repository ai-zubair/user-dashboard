import React, { FunctionComponent, ReactChild } from 'react';
import { FormWrapper } from './FormStyled';
import Button from '../Button/Button';

interface FormProps{
  children?: ReactChild[];
  isSubmitButtonDisabled: boolean;
  onSubmit(): void;
}

const Form: FunctionComponent<FormProps> = ({children, onSubmit, isSubmitButtonDisabled}) => {
  return (
    <FormWrapper onSubmit={isSubmitButtonDisabled ? (event) => {event.preventDefault()}: (event)=>{event.preventDefault(),onSubmit()}}>
      {children}
      <Button isButtonDisabled={isSubmitButtonDisabled} buttonText="Login"/>
    </FormWrapper>
  )
}

export default Form;
