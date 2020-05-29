import React from 'react';

// libs
import Styled from 'styled-components';
import { navigate } from 'hookrouter';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../Flex';
import Product from '../Product';
import H2 from '../H2';
import Button from '../Button';

export default ({data, theme, products_per_row}) => {
    return (
        <Parent>
            <Flex w="100%" j_content={theme === 0 ? "space-between" : "flex-start"} j_content_mobile="center" wrap={theme === 0 ? true : false}>
                {theme === 0 &&
                    <H2>
                        <FontAwesomeIcon icon="store" color="#f7cc2f"/> MAGASIN VEDETTE
                    </H2>
                }
                {theme === 1 &&
                    <H2>
                        <FontAwesomeIcon icon="fire" color="#f7cc2f"/> PRODUITS PHARES
                    </H2>
                }
                {(theme === 0 || theme === 2) &&
                    <ButtonStore width={theme === 2 ? "40%" : "auto"} onClick={() => navigate("/store/1")} color="#f7cc2f">
                        {theme === 2 && <FontAwesomeIcon icon="store"/>} {data.store_name} <FontAwesomeIcon icon="chevron-right" />
                    </ButtonStore>
                }
            </Flex>
            <FlexProd w="100%" j_content="space-between" wrap>
                {Object.keys(data.products).map((keyName, i) => (
                    <Product key={i} display_store_name={theme === 1 ? true : false} products_per_row={products_per_row} product_data={data.products[keyName]} />
                ))}
            </FlexProd>
        </Parent>
    )
};

const Parent = Styled.div`
    
`;

const FlexProd = Styled(Flex)`
    margin-top:1em;
`;

const ButtonStore = Styled(Button)`
    font-size: 1.4rem;

    width:${props => props.width ? props.width : "auto"};

    @media (max-width: 767.98px) {
        width:100%;
    }
`;