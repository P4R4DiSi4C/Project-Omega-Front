import React from 'react'
import Styled from "styled-components";
import Flex from '../../Flex';

export default () => {
    return (
        <Flex percentage="20%" align="flex-start">
            <Image src={"/img/logo.png"} alt="Company Logo" />
        </Flex>
    )
};

const Image = Styled.img`
    width:20%;
`;