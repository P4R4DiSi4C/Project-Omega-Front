import React from 'react';

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

// components
import Flex from '../../Flex';
import Product from '../Product';

export default () => {
    return (
        <Flex percentage="100%" align="flex-start" direction="column">
            <Flex percentage="100%" align="flex-start">
                <P>
                    <FontAwesomeIcon icon={faFire} color="#f7cc2f"/> Produits phares
                </P>
            </Flex>
            <FlexProd percentage="100%" align="space-between" wrap="wrap">
                <Product src="/img/product3.jpg" display_store_name data={{author_store_name:"Wesh",price:10,wear:5,size:"S/28",store:"Zara"}}/>
                <Product src="/img/product5.jpg" display_store_name data={{author_store_name:"Alors",price:15,wear:1,size:"M/32",store:"Zara"}}/>
                <Product src="/img/product6.jpg" display_store_name data={{author_store_name:"Cé",price:20,wear:10,size:"L/36",store:"Zara"}}/>
                <Product src="/img/product1.jpg" display_store_name data={{author_store_name:"Jul",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            </FlexProd>
        </Flex>
    )
};

const P = Styled.p`
    font-size:24px;
    font-weight:lighter;
    margin:0em;
`;

const FlexProd = Styled(Flex)`
    margin-top:1em;
`;