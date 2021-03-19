import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import InputField from '../InputField/InputField';

interface SearchBarProps{
  searchTerm: string;
  searchBarID: string;
  searchBarPlaceHolder: string;
  onSearchtermChange(searchTerm: string): void;
}

export const SearchBarWrapper = styled.div`
  width: 500px;
  input{
    border: none;
  }
`;

const SearchBar: FunctionComponent<SearchBarProps> = ({searchBarPlaceHolder, searchBarID, searchTerm, onSearchtermChange}) => {
  return (
    <SearchBarWrapper>
      <InputField 
        hideLabel={true}
        fieldType="text"
        fieldID={searchBarID}
        fieldValue={searchTerm}
        fieldPlaceholder={searchBarPlaceHolder}
        onFieldChange={onSearchtermChange}
      />
    </SearchBarWrapper>
  )
}

export default SearchBar;