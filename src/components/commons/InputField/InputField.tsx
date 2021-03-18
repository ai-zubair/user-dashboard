import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { InputFieldWrapper, ErrorWrapper } from './InputFieldStyled';

interface InputFieldProps{
  fieldLabel: string;
  fieldID: string;
  fieldType: InputFieldType;
  fieldValue: string;
  errorMessage: string;
  validator: (fieldValue: string)=> boolean;
  onFieldChange:(changedValue: string)=>void;
}

export type InputFieldType = "text" | "password";

const Error = ({isHidden, errorMessage}:{errorMessage: string; isHidden: boolean;})=>{
  if(isHidden)
    return null;
  return(
    <ErrorWrapper>{errorMessage}</ErrorWrapper>
  )
}

const InputField: FunctionComponent<InputFieldProps> = ({fieldLabel, fieldID, fieldType, fieldValue, errorMessage, validator, onFieldChange}) => {
  const [errorHidden, toggleErrorHidden] = useState(true);

  return (
    <InputFieldWrapper>
      <label htmlFor={fieldID}>{fieldLabel}</label>
      <input 
        id={fieldID} 
        type={fieldType} 
        value={fieldValue} 
        onChange={(event: ChangeEvent<HTMLInputElement>) => {toggleErrorHidden(validator(event.target.value)),onFieldChange(event.target.value)}}
        onBlur={(event) => toggleErrorHidden(validator(event.target.value))}
      />
      <Error isHidden={errorHidden} errorMessage={errorMessage || ''} />
    </InputFieldWrapper>
  )
}

export default InputField;
