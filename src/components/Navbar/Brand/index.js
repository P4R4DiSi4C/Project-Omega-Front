import React from 'react'
import Styled from "styled-components";
import Flex from '../../Flex';

export default () => {
    return (
        <BrandFlex percentage="20%" mobile="80%" align="flex-start">
            <Image src={"/img/logo.png"} alt="Company Logo" />
        </BrandFlex>
    )
};

const BrandFlex = Styled(Flex)`
    order:0;
`;

const Image = Styled.img`
    width:70%;
`;