import React from 'react';

// components
import Store from '../../StoreComponent';

export default () => {
    const data={
        products:{
            0:{
                store_name:"Wesh",
                title_item:"Robe Rose",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product3.jpg",
                id:10
            },
            1:{
                store_name:"Cé",
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product5.jpg",
                id:11
            },
            2:{
                store_name:"Jul",
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product6.jpg",
                id:12
            },
            3:{
                store_name:"Oklm",
                title_item:"Robe Bleue",
                price:10,
                size:"S/28",
                store:"Zara",
                type:0,
                img:"/img/product1.jpg",
                id:13
            }
        }
    };
    
    return (
        <Store data={data} theme={1} products_per_row={4} />
    )
};
