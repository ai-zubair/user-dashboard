import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  & > *{
    margin-bottom: 30px;
    &:nth-last-child(1){
      margin-bottom: 0px;
    }
  }
`;
