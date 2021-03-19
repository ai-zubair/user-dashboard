import styled from "styled-components";

export interface TableDataWrapperProps{
  isSpannedFullWidth?: boolean;
}

export const TableWrapper = styled.table`
  thead{
    tr{
      background-color: var(--primary-background-color);
      color: white;
      height: 50px;
    }
  }
  tbody{
    tr{
      border-bottom: 1px solid #838383;
      &:nth-last-child(1){
        border-bottom: none;
      }
      height: 70px;
    }
  }
  td{
    padding: 10px;
  }

`;

export const TableHeaderWrapper = styled.thead`
`;

export const TableBodyWrapper = styled.tbody`
`;

export const TableRowWrapper = styled.tr`
  text-align: center;
`;

export const TableDataWrapper = styled.td<TableDataWrapperProps>`
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;