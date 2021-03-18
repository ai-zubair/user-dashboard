import React,{FunctionComponent, ReactChild} from 'react';
import { ButtonWrapper } from './ButtonStyled';

interface ButtonProps{
  children?: ReactChild[];
  buttonText?: string;
}

const Button: FunctionComponent<ButtonProps> = ({buttonText, children}) => {
  return (
    <ButtonWrapper>
      {buttonText}
      {children}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  buttonText: 'Submit'
}

export default Button;