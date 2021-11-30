import '../styles/globals.css';
import React from 'react';
import DefaultLayout from '../layouts/default';

const MyApp = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default MyApp;
