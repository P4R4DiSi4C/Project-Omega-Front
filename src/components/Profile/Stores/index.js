import React from 'react';

// components
import Store from '../../StoreComponent';
import Divider from '../../Divider';

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
                    }
                }
            },
            1:{
                store_name:"Alice's Tech",
                products:{
                    0:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg"
                    },
                    1:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg"
                    },
                    2:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg"
                    },
                    3:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg"
                    },
                    4:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg"
                    }
                }
            }
        };

    return (
        <>
            {Object.keys(data).map((keyName, i) => (
                <>
                    <Store key={i} data={data[keyName]} theme={2} products_per_row={5} />
                    <Divider key={i} />
                </>
            ))}
        </>
    )
};
