import React,{FunctionComponent, ReactChild} from 'react';
import { Spinner } from '../Spinner';
import { ButtonWrapper } from './ButtonStyled';

interface ButtonProps{
  children?: ReactChild[];
  buttonText?: string;
  isButtonDisabled?: boolean; 
  showLoader?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({buttonText, isButtonDisabled = false, showLoader = false, children}) => {
  return (
    <ButtonWrapper isButtonDisabled={isButtonDisabled}>
      {showLoader ? null : buttonText}
      {children}
      <Spinner 
        isHidden={!showLoader} 
        variant="small" 
        color="var(--primary-background-color)"
      />
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  buttonText: 'Submit',
}

export default Button;