import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';

const Product = (props) => {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    if (router.query.id) {
      axios.get(`https://localhost:5001/product/${router.query.id}`)
        .then(res => setProductInfo(res.data));
    }
  }, [router.query.id]);

  return (
    <div>
      {productInfo && (
      <ProductCard name={productInfo.name} cost={productInfo.price} link={productInfo.images[0].filePath} />
      )}
    </div>
  );
};

export default Product;
