import type { NextPage } from 'next';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchProducts } from '../services/ProductService';
import { layoutFix } from '../lifecycle/helpers';

const Home: NextPage = function () {
  const { products, isLoading } = useAppSelector((state) => state.productReducer);
  const { searchString } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const searchProducts = useMemo(() => {
    if (searchString === '') return products;
    return products.filter((p) => {
      return (
        p.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        p.name.toLowerCase().indexOf(layoutFix(searchString.toLowerCase())) > -1
      );
    });
  }, [searchString, products]);

  if (isLoading) return <StyledContainer>Loading...</StyledContainer>;

  return (
    <StyledContainer>
      <SearchResult>
        {searchProducts && !isLoading ? (
          <p>
            {searchProducts.length
              ? `Найдено ${searchProducts.length} товара по вашему запросу`
              : 'Товаров по запросу не найдено. Попробуйте еще раз'}
          </p>
        ) : null}
      </SearchResult>
      <StyledMainContent>
        <FilterSidebar>Сайдбар с фильтрациями когда-нибудь</FilterSidebar>
        {searchProducts ? (
          <ProductCards>
            {searchProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductCards>
        ) : (
          <>Продукты не найдены.</>
        )}
      </StyledMainContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 90%;
  margin: 1em auto 0;
  display: flex;
  row-gap: 1em;
  flex-direction: column;
`;

const SearchResult = styled.div`
  border: 1px solid black;
`;

const StyledMainContent = styled.section`
  display: grid;
  grid-column-gap: 1em;
  grid-template-rows: 1fr;
  grid-template-columns: 200px auto;
`;

const FilterSidebar = styled.div`
  border: 1px solid red;
`;

const ProductCards = styled.div`
  display: flex;
  column-gap: 1em;
  row-gap: 1em;
  flex-wrap: wrap;
`;

export default Home;
