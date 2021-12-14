import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from './ProductCard';
import { layoutFix } from '../../services/helpers';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const { searchString } = useAppSelector((state) => state.searchReducer);

  return (
    <div>
      {products ? (
        <ProductsContainer>
          {products.map((product) => {
            if (
              product.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
              product.name.toLowerCase().indexOf(layoutFix(searchString.toLowerCase())) > -1
            ) {
              return <ProductCard product={product} />;
            }
            return null;
          })}
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
