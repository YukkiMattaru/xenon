import styled from 'styled-components';
import React from 'react';

const ProductCard = (props) => {
  return (
    <ProductCardContainer>
      <img src={props.link} alt={props.name} />
      <div>
        <a href={`product?${props.id}`}>{props.name}</a>
        <p>{props.cost}</p>
      </div>
      <button onClick={() => alert(`${props.name} добавлен в корзину`)}>В корзину</button>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: flex;
  width: 200px;
  height: 400px;
  flex-direction: column;
`;


export default ProductCard;
