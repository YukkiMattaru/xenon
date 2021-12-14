import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return <StyledHeader className="navbar navbar-expand-md fixed-top">Hello</StyledHeader>;
};

const StyledHeader = styled.nav`
background: whitesmoke;
`;

export default Header;
