import React from 'react';

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import Category from '../Category';

export default () => {
    return (
        <Flex percentage="100%" align="center" direction="column">
            <Flex percentage="100%" align="flex-start">
                <H2>
                    <FontAwesomeIcon icon={faList} color="#f7cc2f"/> Catégories
                </H2>
            </Flex>
            <FlexCat percentage="100%" align="space-around" mobile_align="space-between" wrap="wrap">
                <Category img_src={'/img/cat_shoes.jpg'} cat_title="CHAUSSURES" />
                <Category img_src={'/img/cat_acce.jpg'} cat_title="ACCESSOIRES" />
            </FlexCat>
        </Flex>
    )
};

const FlexCat = Styled(Flex)`
    margin-top:1em;
`;