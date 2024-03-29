// libs
import React from 'react';

// components
import StoreHeader from '../../components/Store/Header';
import StoreProducts from '../../components/Store/Products';
import Divider from '../../components/Divider';

export default ({store_id}) => {
  return (
    <>
        <StoreHeader store_name="Alice's Store"/>
        <Divider />
        <StoreProducts />
    </>
  );
};