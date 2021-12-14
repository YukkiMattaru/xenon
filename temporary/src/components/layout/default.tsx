import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default DefaultLayout;
