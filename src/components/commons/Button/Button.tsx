import React,{FunctionComponent, ReactChild} from 'react';
import { Spinner } from '../Spinner';
import { ButtonWrapper } from './ButtonStyled';
import { Error } from '../InputField/InputField'

interface ButtonProps{
  children?: ReactChild[];
  buttonText?: string;
  isButtonDisabled?: boolean;
  showLoader?: boolean;
  errorMessage?: string;
  onButtonClick?:()=> void; 
}

const Button: FunctionComponent<ButtonProps> = ({buttonText, isButtonDisabled = false, showLoader = false, errorMessage = '', children}) => {
  return (
    <ButtonWrapper isButtonDisabled={isButtonDisabled}>
      {showLoader ? null : buttonText}
      {children}
      <Spinner 
        isHidden={!showLoader} 
        variant="small" 
        color="var(--primary-background-color)"
      />
      <Error isHidden={!Boolean(errorMessage)} errorMessage={errorMessage} />
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  buttonText: 'Submit',
}

export default Button;