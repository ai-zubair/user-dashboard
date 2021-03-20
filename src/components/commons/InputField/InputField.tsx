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
  isHidden?: boolean;
  validator?: (fieldValue: string)=> boolean;
  onFieldChange:(changedValue: string)=>void;
}

export type InputFieldType = "text" | "password";

interface ErrorProps{
  errorMessage: string;
  isHidden: boolean;
}

interface LabelProps{
  isHidden: boolean; 
  labelFor: string; 
  labelText: string;
}

export const Error: FunctionComponent<ErrorProps> = ({isHidden, errorMessage}) => {
  if(isHidden)
    return null;
  return(
    <ErrorWrapper>{errorMessage}</ErrorWrapper>
  )
}

const InputLabel: FunctionComponent<LabelProps> = ({isHidden, labelFor, labelText}) => {
  if(isHidden)
    return null;
  return(
    <label htmlFor={labelFor}>
      {labelText}
    </label>
  )
}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
  if(props.isHidden){
    return null;
  }
  const [errorHidden, toggleErrorHidden] = useState(true);
  const {fieldLabel = '', fieldID, fieldType, fieldValue, fieldPlaceholder, hideLabel = false, errorMessage = '', validator, onFieldChange} = props;

  return (
    <InputFieldWrapper>
      <InputLabel isHidden={hideLabel} labelFor={fieldID} labelText={fieldLabel} />
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
