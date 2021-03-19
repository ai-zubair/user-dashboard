import React,{FunctionComponent, ReactChild} from 'react';
import { Spinner } from '../Spinner';
import { TableWrapper, TableHeaderWrapper, TableBodyWrapper, TableRowWrapper, TableDataWrapper, SpinnerWrapper } from './TableStyled';

interface TableProps {
  tableHeader: ReactChild[];
  tableBody: ReactChild[][];
  tupleKeys: string[];
  showDataLoader?: boolean;
}

interface TableDataProps {
  children: ReactChild;
  isSpannedFullWidth?: boolean;
  spanningWidth?: number
}

interface TableRowProps {
  children: ReactChild[]; 
  spanningWidth?: number;
  isSpannedFullWidth?: boolean;
  isHidden?: boolean;
}

interface TableBodyProps {
  bodyData: ReactChild[][];
  showDataLoader: boolean;
  rowKeys: string[];
  spanningWidth?: number;
}


const TableData: FunctionComponent<TableDataProps> = ({children, isSpannedFullWidth = false, spanningWidth = 1}) => {
  return (
    <TableDataWrapper colSpan={isSpannedFullWidth ? spanningWidth : 1}>
      {children}
    </TableDataWrapper>
  )
}


const TableRow: FunctionComponent<TableRowProps> = ({children, isSpannedFullWidth, spanningWidth, isHidden}) => {
  if(isHidden){
    return null;
  }

  const TableDataList = children.map(
    (child, index) =>  
      <TableData
        key={index}
        isSpannedFullWidth={isSpannedFullWidth} 
        spanningWidth={spanningWidth}
      >
        {child}
      </TableData>
  );

  return(
    <TableRowWrapper>
      {TableDataList}
    </TableRowWrapper>
  )
}

const TableBody: FunctionComponent<TableBodyProps> = ({bodyData, rowKeys,showDataLoader, spanningWidth}) => {
  const TableRowList = bodyData.map( 
    (rowData, index) => 
      <TableRow key={rowKeys[index]}>
        {rowData}
      </TableRow> 
  );
  return (
    <TableBodyWrapper>
      <TableRow isHidden={!showDataLoader} isSpannedFullWidth={showDataLoader} spanningWidth={spanningWidth}>
        {[
          <SpinnerWrapper>
            <Spinner/>
          </SpinnerWrapper>
        ]}
      </TableRow>
      {TableRowList}
    </TableBodyWrapper>
  )
}


const Table: FunctionComponent<TableProps> = ({tableHeader, tableBody, tupleKeys, showDataLoader = false}) => {
  return (
    <TableWrapper>
      <TableHeaderWrapper>
        <TableRow>{tableHeader}</TableRow>
      </TableHeaderWrapper>
      <TableBody rowKeys={tupleKeys} bodyData={tableBody} showDataLoader={showDataLoader} spanningWidth={tableHeader.length}/>
    </TableWrapper>
  )
}

export default Table;