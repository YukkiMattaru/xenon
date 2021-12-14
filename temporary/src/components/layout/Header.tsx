import React from 'react';
import styled from 'styled-components';
import HeaderNavbar from './HeaderNavbar';

const Header: React.FC = () => {
  return (
    <StyledHeader className="navbar navbar-expand-md ">
      <HeaderNavbar />
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  background: whitesmoke;
`;

export default Header;
