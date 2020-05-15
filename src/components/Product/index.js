import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../Flex';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import H3 from '../H3';
import H4 from '../H4';

export default ({product_data, display_store_name, products_per_row}) => {
    let percentage = "21%";
    if(products_per_row === 5)
        percentage = "18%";

    let multi_infos = true;
    if(product_data.type && product_data.type !== "0")
        multi_infos = false;

    return (
        <Flex percentage={percentage} mobile="45%" align="flex-start" align_items="flex-start" direction="column">
            {display_store_name === true &&
                <H3>
                    <FontAwesomeIcon icon="store" color="#f7cc2f"/> {product_data.store_name}
                </H3>       
            }
            <FlexImg percentage="100%">
                <Image src={product_data.img} />
            </FlexImg>
            <FlexPrice percentage="100%" align="center">
                <H4>{product_data.price} CHF</H4>
            </FlexPrice>
            <Flex percentage="100%" align={multi_infos ? 'space-between' : 'center'}>
                {multi_infos ?
                    <>
                        <H4>{product_data.size}</H4>
                        <H4>{product_data.store}</H4>
                    </>
                : <H4>{product_data.title_item}</H4>
                }
            </Flex>
        </Flex>
    )
};

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const FlexImg = Styled(Flex)`
    height: 27vw;
    @media (max-width: 768px) {
        height: 58vw;
    }
`;

const FlexPrice = Styled(Flex)`
    border-bottom:0.1px solid #bbb;
`;