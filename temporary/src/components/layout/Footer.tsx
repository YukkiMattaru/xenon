import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <StyledFooter className="footer fixed-bottom">Hello</StyledFooter>;
};

const StyledFooter = styled.footer`
background: aqua;
`;

export default Footer;
