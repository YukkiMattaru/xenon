import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1><a href="/">XENON</a></h1>
      </div>
      <StyledSearchContainer>
        <label htmlFor="search">Поиск</label>
        <input type="text" name="search" id="search" />
      </StyledSearchContainer>
      <StyledNav>
        <div>Павел</div>
        <div>Профиль</div>
        <div>Корзина</div>
        <div>Выход</div>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 90%;
  margin: 0 auto;
  height: 100px;
  border-bottom: 1px solid red;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  column-gap: 1em;
  width: 30%;
  
  & input {
    width: 100%;
    height: 2em;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  column-gap: 1em;
`;

export default Header;
