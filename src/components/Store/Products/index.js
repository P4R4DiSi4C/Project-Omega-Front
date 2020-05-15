import React from 'react';

// components
import Flex from '../../Flex';
import Product from '../../Product';

export default () => {
    const products = {
        0:{
            title_item:"Robe Rose",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg"
        },
        1:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product2.jpg"
        },
        2:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test2.jpeg"
        },
        3:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test.jpeg"
        },
        4:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg"
        },
        5:{
            title_item:"Robe Rose",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg"
        },
        6:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product2.jpg"
        },
        7:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test2.jpeg"
        },
        8:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test.jpeg"
        },
        9:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg"
        }
    };

    return (
        <Flex percentage="100%" align="space-between" wrap="wrap">
            {Object.keys(products).map((keyName, i) => (
                <Product key={i} products_per_row={5} product_data={products[keyName]} />
            ))}
        </Flex>
    )
};

