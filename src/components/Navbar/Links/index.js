import React from 'react'

// libs
import Styled from 'styled-components';

import Flex from '../../Flex';
import Activelink from '../../ActiveLink';
import VDivider from '../../VerticalDivider';

export default ({is_extended}) => {
    return (
        <>
            <FlexLinks className="hide_mobile" w="50%" w_mobile="100%" j_content="center" j_content_mobile="center">
                <ActiveLink href="/" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
            </FlexLinks>

            {is_extended &&
                <FlexLinks className="hide_desktop" w="50%" w_mobile="100%" j_content="center" j_content_mobile="center">
                    <ActiveLink href="/" exact>Home</ActiveLink>
                    <VDivider />
                    <ActiveLink href="/about" exact>Home</ActiveLink>
                    <VDivider />
                    <ActiveLink href="/about" exact>Home</ActiveLink>
                </FlexLinks>
            }
        </>
    )
};

const ActiveLink = Styled(Activelink)`
    padding:12px 16px;
    &:hover{
        background-color:rgba(17,17,17,0.02)
    }
`;

const FlexLinks = Styled(Flex)`
    order:1;

    @media (max-width: 767.98px) {
        order:3;
        flex-direction:column;
    }
`;