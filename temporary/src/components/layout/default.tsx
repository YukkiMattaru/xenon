import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout: React.FC = ({ children }) => (
  <div className="d-flex flex-column">
    <Header />
    <main role="main" className="container-fluid flex-fill">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
