import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <StyledContainer>
      <SearchResult>Контейнер для того шобы написать что пошел нахуй или я нашел твой товар или популярные товары</SearchResult>
      <StyledMainContent>
        <FilterSidebar>Сайдбар с фильтрациями когда-нибудь</FilterSidebar>
        <ProductCards>
          <ProductCard link="https://images.wbstatic.net/c516x688/new/18700000/18701273-1.jpg" name="Чайник заварочный стеклянный" cost="533Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/14550000/14551233-1.jpg" name="Стеклянный заварочный чайник с кнопкой" cost="1483Р/(зачеркнуто)2000P" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/7280000/7285402-1.jpg" name="Чайник заварочный стекло" cost="732Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/18700000/18701273-1.jpg" name="Чайник заварочный стеклянный" cost="533Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/14550000/14551233-1.jpg" name="Стеклянный заварочный чайник с кнопкой" cost="1483Р/(зачеркнуто)2000P" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/7280000/7285402-1.jpg" name="Чайник заварочный стекло" cost="732Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/18700000/18701273-1.jpg" name="Чайник заварочный стеклянный" cost="533Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/14550000/14551233-1.jpg" name="Стеклянный заварочный чайник с кнопкой" cost="1483Р/(зачеркнуто)2000P" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/7280000/7285402-1.jpg" name="Чайник заварочный стекло" cost="732Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/18700000/18701273-1.jpg" name="Чайник заварочный стеклянный" cost="533Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/14550000/14551233-1.jpg" name="Стеклянный заварочный чайник с кнопкой" cost="1483Р/(зачеркнуто)2000P" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/7280000/7285402-1.jpg" name="Чайник заварочный стекло" cost="732Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/18700000/18701273-1.jpg" name="Чайник заварочный стеклянный" cost="533Р" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/14550000/14551233-1.jpg" name="Стеклянный заварочный чайник с кнопкой" cost="1483Р/(зачеркнуто)2000P" />
          <ProductCard link="https://images.wbstatic.net/c516x688/new/7280000/7285402-1.jpg" name="Чайник заварочный стекло" cost="732Р" />
        </ProductCards>
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
