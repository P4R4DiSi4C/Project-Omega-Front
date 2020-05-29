import React from 'react';

// Components
import Store from '../../StoreComponent';

export default () => {

    const data=
        {
            0:{
                store_name:"Alice's Clothes",
                products:{
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
                    }
                }
            }
        };


    return(
        <Store key={0} data={data[0]} theme={2} products_per_row={5} />
    )
};