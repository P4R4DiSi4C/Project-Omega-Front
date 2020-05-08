import React from 'react'

// libs
import Styled from 'styled-components';

import Flex from '../../Flex';
import Activelink from '../../ActiveLink';
import VDivider from '../../VerticalDivider';

export default ({is_extended}) => {
    return (
        <>
            <FlexLinksDesktop percentage="50%" mobile="100%" align="center" mobile_align="center">
                <ActiveLink href="/" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
            </FlexLinksDesktop>

            {is_extended &&
                <FlexLinksMobile percentage="50%" mobile="100%" align="center" mobile_align="center">
                    <ActiveLink href="/" exact>Home</ActiveLink>
                    <VDivider />
                    <ActiveLink href="/about" exact>Home</ActiveLink>
                    <VDivider />
                    <ActiveLink href="/about" exact>Home</ActiveLink>
                </FlexLinksMobile>
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

    @media (max-width: 768px) {
        order:3;
        flex-direction:column;
    }
`;

const FlexLinksDesktop = Styled(FlexLinks)`
    @media (max-width: 768px) {
        display:none;
    }
`;

const FlexLinksMobile = Styled(FlexLinks)`
    @media (min-width: 768px) {
        display:none;
    }
`;