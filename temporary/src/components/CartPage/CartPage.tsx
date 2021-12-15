import React from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from '../IndexPage/ProductCard';

const CartPage: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { init } = useAppSelector((state) => state.appReducer);
  const { products } = useAppSelector((state) => state.productReducer);
  const { cartItems, isLoading } = useAppSelector((state) => state.cartReducer);

  const calculatePrice = React.useMemo(() => {
    let price = 0;
    if (cartItems && !isLoading && products) {
      _.forEach(cartItems, (item) => {
        const prod = _.find(products, (product) => product.id === item.productId);
        if (prod) {
          price += prod.price * item.amount;
        }
      });
    }
    return price;
  }, [cartItems, isLoading, products]);

  if (init && !isAuth) return <Redirect to="/auth" />;
  if (!isLoading && !cartItems.length) return <h1>Корзина пуста</h1>;
  return (
    <div>
      {!isLoading ? (
        <ProductsContainer>
          {cartItems.map((cartItem) => {
            const product = _.find(products, (product) => product.id === cartItem.productId);
            return product ? <ProductCard product={product} cart count={cartItem.amount} /> : null;
          })}
        </ProductsContainer>
      ) : (
        <div>Loading...</div>
      )}
      <p>{`Общая стоимость: ${calculatePrice} рублей`}</p>
      <Button variant="info"> Купить </Button>
    </div>
  );
};

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  column-gap: 10px;
  row-gap: 10px;
`;

export default CartPage;
