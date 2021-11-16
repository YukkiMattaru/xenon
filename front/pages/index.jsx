import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledContainer>
      <SearchResult>Контейнер для того шобы написать что пошел нахуй или я нашел твой товар или популярные товары</SearchResult>
      <section className="glavny-content">
        <div>Сайдбар с фильтрациями когда-нибудь</div>
        <div>Карточки товаров</div>
      </section>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchResult = styled.div`
  
`;

const StyledMainContent = styled.section`
  display: flex;
  
`;

export default Home;
