import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from '../IndexPage/ProductCard';
import { XenonAPI } from '../../types/XenonAPI';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const { init } = useAppSelector((state) => state.appReducer);
  const { shops } = useAppSelector((state) => state.shopReducer);

  const shop: XenonAPI.Shop | undefined = React.useMemo(() => {
    if (shops && user) {
      return _.find(shops, (item) => item.userId === user.id);
    }
    return undefined;
  }, [shops, user]);

  const prods: XenonAPI.Product[] = React.useMemo(() => {
    if (shop && products) {
      return _.filter(products, ((prod) => {
        return prod.shopId === shop.id;
      }));
    }
    return [];
  }, [shop, products]);
  if (init && !isAuth) return <Redirect to="/auth" />;

  if (!shop) return <div>У вас нет магазина</div>;

  return (
    <div>
      <h1>{shop.shopName}</h1>
      <h2>{shop.shopDescription}</h2>
      <h3>{`Владелец: ${user?.name ?? ''}`}</h3>
      <h3>{`Номер телефона: ${user?.phoneNumber ?? ''}`}</h3>
      {prods ? (
        <ProductsContainer>
          {prods.map((product) => (
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
