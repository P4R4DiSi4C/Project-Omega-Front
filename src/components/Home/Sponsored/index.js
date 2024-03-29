import React from 'react';

// components
import Store from '../../StoreComponent';

export default () => {
    const data={
        store_name:"Alice's Clothes",
        products:{
            0:{
                title_item:"Robe Rose",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product1.jpg",
                id:14
            },
            1:{
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product2.jpg",
                id:15
            },
            2:{
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/test2.jpeg",
                id:16
            },
            3:{
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/test.jpeg",
                id:17
            }
        }
    };

    return (
        <Store data={data} theme={0} products_per_row={4} />
    )
};