import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import DefaultLayout from '../layouts/default';
import { setupStore } from '../store/store';

const MyApp = function ({ Component, pageProps }: AppProps) {
  const store = setupStore();
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
};

export default MyApp;
