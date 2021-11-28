import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import store from '../store/store';

const DefaultLayout: React.FC = function ({ children }) {
  return (
    <Wrapper>
      <Provider store={store}>
        <Header />
        <MainContent>{children}</MainContent>
        <div>Footer</div>
      </Provider>
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
