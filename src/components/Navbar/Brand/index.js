import React from 'react'
import Styled from "styled-components";
import Flex from '../../Flex';
import {navigate} from 'raviger';

export default () => {
    return (
        <BrandFlex w="20%" w_mobile="80%" j_content="flex-start">
            <Image onClick={() => navigate("/")} src={"/img/logo.png"} alt="Company Logo" />
        </BrandFlex>
    )
};

const BrandFlex = Styled(Flex)`
    order:0;
`;

const Image = Styled.img`
    width:70%;
    cursor:pointer;
    
    @media (max-width: 767.98px) {
        width: 50%;
    }
`;