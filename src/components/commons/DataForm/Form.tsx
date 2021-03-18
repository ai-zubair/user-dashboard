import React, { FunctionComponent, ReactChild } from 'react';
import { FormWrapper } from './FormStyled';
import Button from '../Button/Button';

interface FormProps{
  children?: ReactChild[];
}

const Form: FunctionComponent<FormProps> = ({children}) => {
  return (
    <FormWrapper>
      {children}
      <Button buttonText="Login"/>
    </FormWrapper>
  )
}

export default Form;
