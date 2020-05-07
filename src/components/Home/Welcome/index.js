import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

export default () => {
    return (
        <Flex percentage="100%" align="flex-start" wrap="wrap">
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
        width:100%;
    }
`;

const Title = Styled.h1`
    font-size:4rem;
    font-weight:lighter;
    width:60%;
    margin:0;
    
    @media (max-width: 768px) {
        width:100%;
        font-size:2rem;
        text-align:center;
    }
`;