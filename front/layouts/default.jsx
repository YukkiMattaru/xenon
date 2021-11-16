import React from 'react';
import Header from '../components/Header';

const DefaultLayout = (props) => {
  return <div>
    <Header />
    {props.children}
  </div>;
};

export default DefaultLayout;
