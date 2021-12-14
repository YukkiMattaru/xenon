import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layout/default';
import IndexPage from './components/IndexPage/IndexPage';
import { useAppDispatch } from './hooks/redux';
import { initializeApplication } from './services/AppService';
import ProductPage from './components/ProductPage/ProductPage';
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApplication());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/auth" component={AuthPage} />
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </DefaultLayout>
  );
};

export default App;
