import styled from "styled-components";

interface DashboardWrapperProps{
  isDataLoaderVisible: boolean;
  tableHasRecords: boolean;
}

export const DashboardWrapper = styled.div<DashboardWrapperProps>`
  margin: 10px;
  margin-top: 100px;
  background-color: #fefefe;
  box-shadow: var(--primary-box-shadow);
  table{
    width: 100%;
    height: ${props=>props.isDataLoaderVisible && !props.tableHasRecords ? '567px' : 'auto'};
    tr{
      td{
        &:nth-child(1),&:nth-child(2){
          width: 200px;
        }
        &:nth-child(3){
          width: 400px;
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

export const AddUserButtonWrapper = styled.div`
  a{
    text-decoration: none;
  }
  button{
    width: 150px;
    background-color: var(--secondary-background-color);
    border: 2px solid var(--secondary-background-color);
    box-shadow: var(--secondary-box-shadow);
  }
`;

export const ActionButtonsWrapper = styled.div`
  padding: 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button{
    width: 100px;
    height: 35px;
  }
`;