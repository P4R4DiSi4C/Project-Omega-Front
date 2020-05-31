import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../Flex';
import {navigate} from 'hookrouter';

// icons
import Icon from '../Icon';

// components
import H3 from '../H3';
import H4 from '../H4';

export default ({product_data, display_store_name, products_per_row}) => {
    let width = "21%";
    if(products_per_row === 5)
        width = "18%";

    let multi_infos = true;
    if(product_data.type && product_data.type !== "0")
        multi_infos = false;
    return (
        <FlexProduct onClick={() => navigate("/product/" + product_data.id)} w={width} w_mobile="45%" j_content="flex-start" a_items="flex-start" d="column">
            {display_store_name === true &&
                <H3>
                    <Icon icon="store" /> {product_data.store_name}
                </H3>      
            }
            <FlexImg w="100%">
                <Image src={product_data.img} />
            </FlexImg>
            <FlexPrice w="100%" j_content="center">
                <H4>{product_data.price} CHF</H4>
            </FlexPrice>
            <Flex w="100%" j_content={multi_infos ? 'space-between' : 'center'}>
                {multi_infos ?
                    <>
                        <H4>{product_data.size}</H4>
                        <H4>{product_data.store}</H4>
                    </>
                : <H4>{product_data.title_item}</H4>
                }
            </Flex>
        </FlexProduct>
    )
};

const FlexProduct = Styled(Flex)`
    &:hover{
        cursor:pointer;
    }
`;

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

const FlexImg = Styled(Flex)`
    height: 27vw;
    @media (max-width: 767.98px) {
        height: 58vw;
    }
`;

const FlexPrice = Styled(Flex)`
    border-bottom:0.1px solid #bbb;
`;