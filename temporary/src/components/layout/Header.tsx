import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      {
        React.createElement(withRouter(HeaderNavbar))
      }
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  background: whitesmoke;
`;

export default Header;
