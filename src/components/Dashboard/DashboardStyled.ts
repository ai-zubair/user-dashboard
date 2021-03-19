import styled from "styled-components";

export const DashboardWrapper = styled.div`
  margin: 10px;
  margin-top: 100px;
  background-color: #fefefe;
  box-shadow: var(--primary-box-shadow);
  table{
    width: 100%;
    height: 478px;
    tr{
      td{
        &:nth-child(1),&:nth-child(2){
          width: 200px;
        }
        &:nth-child(3){
          width: 300px;
        }
        &:nth-child(4){
          width: 100px;
        }
        &:nth-last-child(1){
          width: calc(100% - 200px + 200px + 300px + 100px);
        }
      }
    }
    tbody{
      height: 420px;
      overflow: scroll;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  width: 500px;
  input{
    border: none;
  }
`;

export const AddUserButtonWrapper = styled.div`
  button{
    width: 150px;
    background-color: var(--secondary-background-color);
    border: 2px solid var(--secondary-background-color);
    box-shadow: var(--secondary-box-shadow);
  }
`;