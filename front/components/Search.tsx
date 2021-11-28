import React from 'react';
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';

const Search: React.FC = function () {
  const { search, handleChange } = useSearch();

  return (
    <StyledSearchContainer>
      <input type="search" placeholder="Найти товары" value={search} onChange={handleChange} />
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
