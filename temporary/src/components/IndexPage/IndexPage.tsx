import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from './ProductCard';
import { layoutFix } from '../../services/helpers';
import ShopCard from './ShopCard';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const { searchString } = useAppSelector((state) => state.searchReducer);
  const { shops } = useAppSelector((state) => state.shopReducer);

  return (
    <div>
      {shops ? (
        <div>
          <h1>Магазины:</h1>
          <ItemsContainer>
            {shops.map((shop) => {
              if (
                shop.shopName.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
              shop.shopName.toLowerCase().indexOf(layoutFix(searchString.toLowerCase())) > -1
              ) {
                return <ShopCard shop={shop} />;
              }
              return null;
            })}
          </ItemsContainer>
        </div>
      ) : null}
      {products ? (
        <div>
          <h1>Продукты:</h1>
          <ItemsContainer>
            {products.map((product) => {
              if (
                product.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
              product.name.toLowerCase().indexOf(layoutFix(searchString.toLowerCase())) > -1
              ) {
                return <ProductCard product={product} />;
              }
              return null;
            })}
          </ItemsContainer>
        </div>
      ) : null}
    </div>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  column-gap: 10px;
  row-gap: 10px;
`;

export default IndexPage;
