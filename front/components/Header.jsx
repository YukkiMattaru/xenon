import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Header = function () {
  return (
    <StyledHeader>
      <div>
        <h1>XENON</h1>
      </div>
      <Search />
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

const StyledNav = styled.nav`
  display: flex;
  column-gap: 1em;
`;

export default Header;
