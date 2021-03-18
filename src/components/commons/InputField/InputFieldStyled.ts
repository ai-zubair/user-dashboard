import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
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