import React from 'react';

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'hookrouter';

// components
import Flex from '../../Flex';
import Product from '../Product';
import H2 from '../../H2';
import Button from '../../Button';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Flex percentage="100%" align="flex-start" direction="column">
            <Flex percentage="100%" align="space-between" mobile_align="center" wrap="wrap">
                <H2>
                    <FontAwesomeIcon icon={faStore} color="#f7cc2f"/> MAGASIN VEDETTE
                </H2>
                <ButtonSponso onClick={() => navigate("/store/1")} color="#f7cc2f">
                    ALICE'S CLOTHES <FontAwesomeIcon icon={faChevronRight} />
                </ButtonSponso>
            </Flex>
            <FlexProd percentage="100%" align="space-between" wrap="wrap">
                <Product src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:10,wear:5,size:"S/28",store:"Zara"}}/>
                <Product src="/img/product2.jpg" data={{author_store_name:"Alice's Clothes",price:15,wear:1,size:"M/32",store:"Zara"}}/>
                <Product src="/img/product3.jpg" data={{author_store_name:"Alice's Clothes",price:20,wear:10,size:"L/36",store:"Zara"}}/>
                <Product src="/img/product1.jpg" data={{author_store_name:"Alice's Clothes",price:25,wear:20,size:"XXXL/46",store:"Zara"}}/>
            </FlexProd>
        </Flex>
    )
};

const FlexProd = Styled(Flex)`
    margin-top:1em;
`;

const ButtonSponso = Styled(Button)`
    font-size: 1.4rem;
`;