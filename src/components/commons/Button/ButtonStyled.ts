import styled from "styled-components";

export const ButtonWrapper = styled.button<{isButtonDisabled: boolean}>`
  color: ${props => props.isButtonDisabled ? 'var(--primary-text-color)' : 'white' };
  background-color: ${props => props.isButtonDisabled ? 'transparent' : 'var(--primary-background-color)' };
  border: ${props => props.isButtonDisabled ? '2px solid var(--primary-text-color)' : '2px solid var(--primary-background-color)' };
  box-shadow: ${props => props.isButtonDisabled ? 'none' : 'var(--container-box-shadow)' };
  opacity: ${props => props.isButtonDisabled ? '0.3' : '1' };
  outline: none;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  &:hover{
    box-shadow: none;
    cursor: ${props => props.isButtonDisabled ? 'not-allowed' : 'pointer' };
  }
`;