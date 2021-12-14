import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout: React.FC = ({ children }) => (
  <body className="d-flex flex-column">
    <Header />
    <main role="main" className="container-fluid flex-fill">
      {children}
    </main>
    <Footer />
  </body>
);

export default DefaultLayout;
