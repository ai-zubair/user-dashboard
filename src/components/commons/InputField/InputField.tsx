import React, { FunctionComponent } from 'react';
import { InputFieldWrapper } from './InputFieldStyled';

interface InputFieldProps{
  fieldLabel: string;
  fieldID: string;
  fieldType: InputFieldType;
}

export type InputFieldType = "text" | "password";

const InputField: FunctionComponent<InputFieldProps> = ({fieldLabel, fieldID, fieldType}) => {
  return (
    <InputFieldWrapper>
      <label htmlFor={fieldID}>{fieldLabel}</label>
      <input id={fieldID} type={fieldType}/>
    </InputFieldWrapper>
  )
}

export default InputField;
