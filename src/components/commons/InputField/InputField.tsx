import React, { ChangeEvent, FunctionComponent } from 'react';
import { InputFieldWrapper } from './InputFieldStyled';

interface InputFieldProps{
  fieldLabel: string;
  fieldID: string;
  fieldType: InputFieldType;
  fieldValue: string;
  onFieldChange:(changedValue: string)=>void;
}

export type InputFieldType = "text" | "password";

const InputField: FunctionComponent<InputFieldProps> = ({fieldLabel, fieldID, fieldType, fieldValue, onFieldChange}) => {
  return (
    <InputFieldWrapper>
      <label htmlFor={fieldID}>{fieldLabel}</label>
      <input 
        id={fieldID} 
        type={fieldType} 
        value={fieldValue} 
        onChange={(event: ChangeEvent<HTMLInputElement>) => onFieldChange(event.target.value)}
      />
    </InputFieldWrapper>
  )
}

export default InputField;
