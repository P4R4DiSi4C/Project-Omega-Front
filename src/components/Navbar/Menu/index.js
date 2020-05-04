import React from 'react'

// libs
//import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../Flex';

export default () => {
    return (
        <Flex percentage="20%" align="flex-end">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Flex>
    )
};