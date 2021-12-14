import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layout/default';
import IndexPage from './components/IndexPage/IndexPage';
import { useAppDispatch } from './hooks/redux';
import { initializeApplication } from './services/AppService';
import ProductPage from './components/ProductPage/ProductPage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApplication());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
    </DefaultLayout>
  );
};

export default App;
