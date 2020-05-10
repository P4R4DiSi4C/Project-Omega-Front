import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

export default () => {
    return (
        <Flex percentage="100%" align="space-between" mobile_align="center" wrap="wrap">
            <Image src={"/img/welcome_img.jpg"} alt="Welcome Image" />
            <Title>
                Faites du tri, gagnez de l'argent et trouvez ce qui vous plait !
            </Title>
        </Flex>
    )
};

const Image = Styled.img`
    width:40%;

    @media (max-width: 768px) {
        width:70%;
    }
`;

const Title = Styled.h1`
    font-size:3.4rem;
    font-weight:lighter;
    width:50%;
    margin:0;
    
    @media (max-width: 768px) {
        width:80%;
        font-size:1.7rem;
        text-align:center;
    }
`;