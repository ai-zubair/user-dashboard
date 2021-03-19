import styled from "styled-components";

export const TableWrapper = styled.table`

`;

export const TableHeaderWrapper = styled.thead`
  tr{
    background-color: var(--primary-background-color);
    color: white;
    height: 50px;
  }
`;

export const TableBodyWrapper = styled.tbody`
  tr{
    border-bottom: 1px solid #838383;
    &:nth-last-child(1){
      border-bottom: none;
    }
    height: 70px;
  }
`;

export const TableRowWrapper = styled.tr`
  text-align: center;
`;

export const TableDataWrapper = styled.td`
  padding: 10px;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;