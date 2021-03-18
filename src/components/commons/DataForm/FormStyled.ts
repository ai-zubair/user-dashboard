import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  & > *{
    margin-bottom: 30px;
    &:nth-last-child(1){
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
`;
