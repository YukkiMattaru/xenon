import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layout/default';
import IndexPage from './components/IndexPage/IndexPage';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { initializeApplication } from './services/AppService';
import ProductPage from './components/ProductPage/ProductPage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(initializeApplication(user?.id));
  }, [dispatch, isAuth, user]);

  return (
    <DefaultLayout>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/shop/:id?" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/auth" component={AuthPage} />
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </DefaultLayout>
  );
};

export default App;
