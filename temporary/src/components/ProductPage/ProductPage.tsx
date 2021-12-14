import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';
import { Button, Carousel, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import { XenonAPI } from '../../types/XenonAPI';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

const ProductPage: React.FC<Props> = (props) => {
  const { match } = props;
  const { products } = useAppSelector((state) => state.productReducer);
  const [product, setProduct] = useState<XenonAPI.Product | undefined>(undefined);

  React.useEffect(() => {
    setProduct(_.find(products, (prod) => prod.id === match.params.id));
  }, [products]);

  return (
    <div>
      {product ? (
        <Container>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.rating}</div>
          <Carousel>
            {product.images.map((image) => (
              <Carousel.Item>
                <Image src={image.filePath} alt={image.fileName} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Button>Добавить в корзину</Button>
        </Container>
      ) : null}
    </div>
  );
};

const Title = styled.div``;

export default ProductPage;
