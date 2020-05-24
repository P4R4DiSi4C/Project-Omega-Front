import React from 'react'

// libs
import Styled from 'styled-components';

import Flex from '../../Flex';
import Activelink from '../../ActiveLink';
import VDivider from '../../VerticalDivider';

export default ({is_extended}) => {
    return (
        <>
            <FlexLinks className="hide_mobile" percentage="50%" mobile="100%" align="center" mobile_align="center">
                <ActiveLink href="/" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
                <VDivider />
                <ActiveLink href="/about" exact>Home</ActiveLink>
            </FlexLinks>

            {is_extended &&
                <FlexLinks className="hide_desktop" percentage="50%" mobile="100%" align="center" mobile_align="center">
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

    @media (max-width: 700px) {
        order:3;
        flex-direction:column;
    }
`;