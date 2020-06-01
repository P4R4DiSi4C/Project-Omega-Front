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
            },
            1:{
                store_name:"Alice's Tech",
                products:{
                    0:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg",
                        id:5
                    },
                    1:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg",
                        id:6
                    },
                    2:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg",
                        id:7
                    },
                    3:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg",
                        id:8
                    },
                    4:{
                        title_item:"PS4",
                        price:10,
                        type:1,
                        img:"/img/product1.jpg",
                        id:9
                    }
                }
            }
        };

    return (
        <>
            {Object.keys(data).map((keyName, i) => (
                <div key={i}>
                    <Store key={i} data={data[keyName]} theme={2} products_per_row={5} />
                    <Divider key={i+"divider"} />
                </div>
            ))}
        </>
    )
};
