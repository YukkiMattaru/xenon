import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/default';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default MyApp;
