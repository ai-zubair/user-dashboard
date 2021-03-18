import styled from "styled-components";

export const ButtonWrapper = styled.button<{isButtonDisabled: boolean}>`
  color: ${props => props.isButtonDisabled ? 'var(--disabled-text-color)' : 'white' };
  background-color: ${props => props.isButtonDisabled ? 'transparent' : 'var(--primary-background-color)' };
  border: ${props => props.isButtonDisabled ? '2px solid var(--disabled-text-color)' : '2px solid var(--primary-background-color)' };
  box-shadow: ${props => props.isButtonDisabled ? 'none' : 'var(--container-box-shadow)' };
  position: relative;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 43px;
  justify-content: space-around;
  & > * {
    transition: flex-grow,flex-shrink 0.2s ease;
  }
  &:hover{
    box-shadow: none;
    cursor: ${props => props.isButtonDisabled ? 'not-allowed' : 'pointer' };
  }
`;