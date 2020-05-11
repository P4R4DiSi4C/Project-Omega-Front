import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import Category from '../Category';

export default () => {
    return (
        <>
            <Flex percentage="100%" align="flex-start">
                <H2>
                    <FontAwesomeIcon icon="list" color="#f7cc2f"/> Catégories
                </H2>
            </Flex>
            <FlexCat percentage="100%" align="space-around" mobile_align="space-between" wrap="wrap">
                <Category img_src={'/img/cat_shoes.jpg'} cat_title="CHAUSSURES" />
                <Category img_src={'/img/cat_acce.jpg'} cat_title="ACCESSOIRES" />
            </FlexCat>
        </>
    )
};

const FlexCat = Styled(Flex)`
    margin-top:1em;
`;