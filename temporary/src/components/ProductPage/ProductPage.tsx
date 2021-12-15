import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';
import { Button, Carousel, Container, Image } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { XenonAPI } from '../../types/XenonAPI';
import { cartItemSlice } from '../../store/reducers/cartItem';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

const ProductPage: React.FC<Props> = (props) => {
  const { match } = props;
  const { products } = useAppSelector((state) => state.productReducer);
  const { user } = useAppSelector((state) => state.authReducer);
  const [product, setProduct] = useState<XenonAPI.Product | undefined>(undefined);
  const dispatch = useAppDispatch();
  const { addProductToCartItem } = cartItemSlice.actions;

  React.useEffect(() => {
    setProduct(_.find(products, (prod) => prod.id === match.params.id));
  }, [products, match.params.id]);

  const addToCart = React.useCallback(() => {
    if (user && product) {
      dispatch(addProductToCartItem({ productId: product.id, userId: user.id }));
    }
  }, [addProductToCartItem, dispatch, product, user]);

  const calculateRating: string = React.useMemo(() => {
    if (!product) return '☆☆☆☆☆';
    return '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
  }, [product]);
  return (
    <div>
      {product ? (
        <Container>
          <h1>{product.name}</h1>
          <h2>{`Рейтинг: ${calculateRating}`}</h2>
          <h2>
            {`Стоимость: ${product.price} рублей`}
            {product.oldPrice !== product.price && (
            <div>
              {'Старая цена: '}
              <s>{`${product.oldPrice} рублей`}</s>
            </div>
            )}
          </h2>
          <Carousel>
            {product.images.map((image) => (
              <Carousel.Item>
                <Image style={{ maxWidth: '600px' }} src={image.filePath} alt={image.fileName} />
              </Carousel.Item>
            ))}
          </Carousel>
          {user && (
            <Button onClick={addToCart}>Добавить в корзину</Button>
          )}
        </Container>
      ) : null}
    </div>
  );
};

export default ProductPage;
