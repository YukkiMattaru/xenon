import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from './ProductCard';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  return (
    <div>
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
