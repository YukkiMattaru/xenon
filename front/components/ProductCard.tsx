import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
import { XenonAPI } from '../types/XenonAPI';
import useSearch from '../hooks/useSearch';

interface Props {
  product: XenonAPI.Product;
}

const ProductCard: React.FC<Props> = function ({ product }) {
  return (
    <ProductCardContainer>
      {product.images
        ? product.images.map((image) => <img src={image.filePath} alt={product.name} key={image.id} />)
        : null}
      <div>
        <a href={`product?${product.id}`}>{product.name}</a>
        <p>{product.price}</p>
      </div>
      <button onClick={() => alert(`${product.name} добавлен в корзину`)}>В корзину</button>
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
