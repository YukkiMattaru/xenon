import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { searchSlice } from '../store/reducers/search';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const Search: React.FC = function () {
  const { searchString } = useAppSelector((state) => state.searchReducer);
  const { setSearch } = searchSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <StyledSearchContainer>
      <input
        type="search"
        placeholder="Найти товары"
        value={searchString}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </StyledSearchContainer>
  );
};

const StyledSearchContainer = styled.div`
  display: flex;
  column-gap: 1em;
  width: 30%;

  & input {
    width: 100%;
    height: 2em;
  }
`;

export default Search;
