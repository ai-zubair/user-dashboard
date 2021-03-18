import React, { FunctionComponent, ReactChild } from 'react';
import { FormWrapper } from './FormStyled';
import Button from '../Button/Button';

interface FormProps{
  children?: ReactChild[];
  isSubmitButtonDisabled: boolean;
}

const Form: FunctionComponent<FormProps> = ({children, isSubmitButtonDisabled}) => {
  return (
    <FormWrapper onSubmit={isSubmitButtonDisabled ? (event) => {event.preventDefault()}: (event)=>{event.preventDefault()}}>
      {children}
      <Button isButtonDisabled={isSubmitButtonDisabled} buttonText="Login"/>
    </FormWrapper>
  )
}

export default Form;
