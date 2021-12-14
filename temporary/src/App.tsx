import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layout/default';
import ProductsPage from './components/ProductsPage';
import { useAppDispatch } from './hooks/redux';
import { initializeApplication } from './services/AppService';
import ProductPage from './components/ProductPage';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApplication());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route exact path="/">
          <ProductsPage />
        </Route>
      </Switch>
    </DefaultLayout>
  );
};

export default App;
