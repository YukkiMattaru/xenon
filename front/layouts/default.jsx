import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const DefaultLayout = (props) => {
  return <Wrapper>
    <Header />
    <MainContent>
    {props.children}
    </MainContent>
    <div>Footer</div>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh ;
`;

const MainContent = styled.div`
`;

export default DefaultLayout;
