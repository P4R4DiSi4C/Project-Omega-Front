import React from 'react';

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export default ({store_name}) => {
    return (
        <Flex percentage="100%" align="flex-start" direction="column">
            <Flex percentage="100%" align="flex-end" mobile_align="center">
                <H2>
                    <FontAwesomeIcon icon={faStore} color="#f7cc2f"/> {store_name}
                </H2>
            </Flex>
        </Flex>
    )
};