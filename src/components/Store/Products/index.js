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
            img:"/img/product1.jpg",
            id:0
        },
        1:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product2.jpg",
            id:1
        },
        2:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test2.jpeg",
            id:2
        },
        3:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test.jpeg",
            id:3
        },
        4:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg",
            id:4
        },
        5:{
            title_item:"Robe Rose",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg",
            id:5
        },
        6:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product2.jpg",
            id:6
        },
        7:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test2.jpeg",
            id:7
        },
        8:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/test.jpeg",
            id:8
        },
        9:{
            title_item:"Robe Bleue",
            price:10,
            size:"S/28",
            store:"Zara",
            type:0,
            img:"/img/product1.jpg",
            id:9
        }
    };

    return (
        <Flex w="100%" j_content="space-between" wrap>
            {Object.keys(products).map((keyName, i) => (
                <Product key={i} products_per_row={5} product_data={products[keyName]} />
            ))}
        </Flex>
    )
};

