import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  label{
    margin-bottom: 5px;
    font-size: var(--label-font-size);
    font-weight: var(--lighter-font-weight);
    color: var(--primary-text-color);
  }
  input{
    padding: 10px;
    border: 2px solid var(--secondary-text-color);
    border-radius: 5px;
    color: var(--secondary-text-color);
    font-size: var(--text-font-size);
    font-weight: var(--lighter-font-weight);
    outline: none;
  }
`;

export const ErrorWrapper = styled.span`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: -18px;
  left: 1px;
  font-weight: 300;
`;