import React from 'react';
import { Card, Carousel, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XenonAPI } from '../types/XenonAPI';

interface Props {
  product: XenonAPI.Product;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <StyledCard>
      <StyledLink to={`/product/${product.id}`}>
        <Card.Header>{product.name}</Card.Header>
        <Card.Body>
          <Carousel>
            {product.images.map((image) => (
              <ProductCarousel key={image.id}>
                <ProductImage src={image.filePath} alt={image.fileName} />
              </ProductCarousel>
            ))}
          </Carousel>
          <Card.Text className="p-2">{`Цена: ${product.price} рублей`}</Card.Text>
        </Card.Body>
      </StyledLink>
    </StyledCard>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledCard = styled(Card)`
  width: 15%;
`;

const ProductCarousel = styled(Carousel.Item)``;

const ProductImage = styled(Image)`
  width: 150px;
  height: 150px;
`;

export default Product;
