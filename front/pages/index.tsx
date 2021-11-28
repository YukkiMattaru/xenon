import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { taxios } from '../lifecycle/services';
import ProductCard from '../components/ProductCard';
import { XenonAPI } from '../types/XenonAPI';
import useTaxiosRequest from '../hooks/useTaxiosRequest';
import useSearch from '../hooks/useSearch';
import { useAppSelector } from '../hooks/redux';

const Home: NextPage = function () {
  const [products, setProducts] = useState<XenonAPI.Product[]>();
  const { sendAjaxRequest } = useTaxiosRequest();
  const search = useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    const getPopularProducts = async () => {
      const result = await sendAjaxRequest(() => taxios.get('/products/search'));
      setProducts(result.error ? [] : result.data);
    };

    getPopularProducts();
  }, []);

  return (
    <StyledContainer>
      <SearchResult>
        Контейнер для того шобы написать что пошел нахуй или я нашел твой товар или популярные товары
      </SearchResult>
      <StyledMainContent>
        <FilterSidebar>Сайдбар с фильтрациями когда-нибудь</FilterSidebar>
        {products ? (
          <ProductCards>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductCards>
        ) : (
          <>Loading...</>
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
