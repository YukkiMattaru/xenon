import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layout/default';
import Header from './components/layout/Header';
import Hello from './components/Hello';

const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/hello" element={<Header />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
