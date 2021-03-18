import React,{FunctionComponent, ReactChild} from 'react';
import { ButtonWrapper } from './ButtonStyled';

interface ButtonProps{
  children?: ReactChild[];
  buttonText?: string;
  isButtonDisabled?: boolean; 
}

const Button: FunctionComponent<ButtonProps> = ({buttonText, isButtonDisabled = false, children}) => {
  return (
    <ButtonWrapper isButtonDisabled={isButtonDisabled}>
      {buttonText}
      {children}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  buttonText: 'Submit',
}

export default Button;