import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #3f51b5;
  border-radius: 4px;
  box-shadow: var(--container-box-shadow);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  &:hover{
    box-shadow: none;
  }
`;