import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
      axios.get('https://localhost:5001/products/search')
        .then(res => {
          setProducts(res.data);
        });
  }, []);

  console.log(products);

  return (
    <StyledContainer>
      <SearchResult>Контейнер для того шобы написать что пошел нахуй или я нашел твой товар или популярные товары</SearchResult>
      <StyledMainContent>
        <FilterSidebar>Сайдбар с фильтрациями когда-нибудь</FilterSidebar>
          {
            products ? (
              <ProductCards>
                {products.map(product => (
                  <ProductCard id={product.id} key={product.id} link={product.images[0].filePath} name={product.name} cost={product.price} />
                ))}
              </ProductCards>
            ) : (
              <>Loading...</>
            )
          }
      </StyledMainContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 90%;
  margin: 1em auto 0 auto;
  margin-top: 1em;
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
