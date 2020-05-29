import React from 'react';

// components
import ProductHeader from '../../components/ProductPage/Header';
import ProductMore from '../../components/ProductPage/More';
import Divider from '../../components/Divider';

export default ({product_id}) => {
  return (
    <>
        <ProductHeader />
        <Divider />
        <ProductMore />
    </>
  );
};