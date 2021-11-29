import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const DefaultLayout: React.FC = function ({ children }) {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <div>Footer</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const MainContent = styled.div``;

export default DefaultLayout;
