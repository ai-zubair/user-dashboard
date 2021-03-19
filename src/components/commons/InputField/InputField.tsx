import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { InputFieldWrapper, ErrorWrapper } from './InputFieldStyled';

interface InputFieldProps{
  fieldLabel?: string;
  fieldID: string;
  fieldType: InputFieldType;
  fieldValue: string;
  fieldPlaceholder?: string;
  errorMessage?: string;
  hideLabel?: boolean;
  validator?: (fieldValue: string)=> boolean;
  onFieldChange:(changedValue: string)=>void;
}

export type InputFieldType = "text" | "password";

export const Error = ({isHidden, errorMessage}:{errorMessage: string; isHidden: boolean;})=>{
  if(isHidden)
    return null;
  return(
    <ErrorWrapper>{errorMessage}</ErrorWrapper>
  )
}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
  const [errorHidden, toggleErrorHidden] = useState(true);
  const {fieldLabel, fieldID, fieldType, fieldValue, fieldPlaceholder, hideLabel, errorMessage = '', validator, onFieldChange} = props;

  return (
    <InputFieldWrapper>
      {hideLabel ? null : <label htmlFor={fieldID}>{fieldLabel}</label> }
      <input 
        id={fieldID} 
        type={fieldType} 
        placeholder={fieldPlaceholder}
        value={fieldValue} 
        onChange={(event: ChangeEvent<HTMLInputElement>) => {toggleErrorHidden(validator ? validator(event.target.value): false),onFieldChange(event.target.value)}}
        onBlur={(event) => toggleErrorHidden(validator ? validator(event.target.value): false)}
      />
      <Error isHidden={errorHidden} errorMessage={errorMessage} />
    </InputFieldWrapper>
  )
}

export default InputField;
