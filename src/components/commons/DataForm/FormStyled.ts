import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  & > *{
    margin-bottom: 10px;
    &:nth-last-child(1){
      margin-bottom: 0px;
    }
  }
`;
