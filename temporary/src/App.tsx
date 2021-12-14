import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layout/default';

const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
