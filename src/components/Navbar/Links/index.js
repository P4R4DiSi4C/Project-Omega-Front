import React from 'react'

// libs
import Styled from 'styled-components';

import Flex from '../../Flex';
import Activelink from '../../ActiveLink';
import VDivider from '../../VerticalDivider';

export default () => {
    return (
        <Flex percentage="50%" align="center">
            <ActiveLink href="/" exact>Home</ActiveLink>
            <VDivider />
            <ActiveLink href="/about" exact>Home</ActiveLink>
            <VDivider />
            <ActiveLink href="/about" exact>Home</ActiveLink>
        </Flex>
    )
};

const ActiveLink = Styled(Activelink)`
    padding:12px 16px;
    &:hover{
        background-color:rgba(17,17,17,0.02)
    }
  `;