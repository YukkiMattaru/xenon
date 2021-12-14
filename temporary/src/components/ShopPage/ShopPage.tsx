import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from '../IndexPage/ProductCard';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { init } = useAppSelector((state) => state.appReducer);
  if (init && !isAuth) return <Redirect to="/auth" />;

  return (
    <div>
      <p>Вот тут будет написано название магазина</p>
      <p>Вот описание магазина</p>
      <p>Вот имя владельца</p>
      <p>Номер телефона</p>
      <p>Средний рейтинг ★★★★☆</p>
      {products ? (
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </ProductsContainer>
      ) : (
        <div>Loading</div>
      )}
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

export default IndexPage;
