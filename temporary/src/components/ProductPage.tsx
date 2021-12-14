import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { XenonAPI } from '../types/XenonAPI';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

const ProductPage: React.FC<Props> = (props) => {
  const { match } = props;
  const { products } = useAppSelector((state) => state.productReducer);
  const [product, setProduct] = useState<XenonAPI.Product | undefined>(
    undefined,
  );

  React.useEffect(() => {
    setProduct(_.find(products, (prod) => prod.id === match.params.id));
  }, []);

  return (
    <div>
      {product ? (
        <Container>
          <></>
          <div />
          <div />
          <div />
        </Container>
      ) : null}
    </div>
  );
};

const Title = styled.div``;

export default ProductPage;
