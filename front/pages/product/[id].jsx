import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = (props) => {

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    axios.get(`https://localhost:5001/product/${props.id}`)
      .then(res => setProductInfo(res.data));
  });

  console.log(productInfo);

  return (
    <div>
      Hello
    </div>
  );
};

export default Product;
