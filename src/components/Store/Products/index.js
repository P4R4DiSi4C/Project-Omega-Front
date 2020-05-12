import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import Product from '../../Home/Product';

export default () => {
    return (
        <Flex percentage="100%" align="space-between" wrap="wrap">
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:10,wear:5,size:"S/28",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product2.jpg" data={{author_store_name:"Alice's Clothes",price:15,wear:1,size:"M/32",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product3.jpg" data={{author_store_name:"Alice's Clothes",price:20,wear:10,size:"L/36",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            <Product items_nb="5" src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
        </Flex>
    )
};

