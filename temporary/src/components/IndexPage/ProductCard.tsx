import React from 'react';
import { Button, Card, Carousel, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XenonAPI } from '../../types/XenonAPI';
import { cartItemSlice, ChangeCartItemCountActionType } from '../../store/reducers/cartItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

type Props = {
  product: XenonAPI.Product;
  cart?: boolean;
  count?: number;
}

const ProductCard: React.FC<Props> = ({ product, cart = false, count = -1 }) => {
  const { changeCartItemCount, addProductToCartItem } = cartItemSlice.actions;
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const handleChangeCartItemCount = (actionType: ChangeCartItemCountActionType) => {
    dispatch(changeCartItemCount({ productId: product.id, actionType }));
  };

  const addToCart = () => {
    if (user) {
      dispatch(addProductToCartItem({ productId: product.id, userId: user.id }));
    }
  };

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
      {user && (
      <Card.Footer>
        {cart ? (
          <ActionContainer>
            <Button onClick={() => handleChangeCartItemCount(ChangeCartItemCountActionType.decrement)}>-</Button>
            <Card.Text>{count !== -1 ? count : 0}</Card.Text>
            <Button onClick={() => handleChangeCartItemCount(ChangeCartItemCountActionType.increment)}>+</Button>
          </ActionContainer>
        ) : (
          <Button onClick={addToCart}>Добавить в корзину</Button>
        )}
      </Card.Footer>
      )}
    </StyledCard>
  );
};

const ActionContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

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

export default ProductCard;
