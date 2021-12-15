import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XenonAPI } from '../../types/XenonAPI';

type Props = {
  shop: XenonAPI.Shop;
}

const ShopCard: React.FC<Props> = ({ shop }) => {
  return (
    <StyledCard>
      <StyledLink to="/shop/">
        <Card.Header>{shop.shopName}</Card.Header>
        <Card.Body>
          <Card.Text className="p-2">{shop.shopDescription}</Card.Text>
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

export default ShopCard;
