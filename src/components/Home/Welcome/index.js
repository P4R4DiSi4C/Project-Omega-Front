import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

export default () => {
    return (
        <Flex percentage="100%" align="flex-start">
            <Flex percentage="50%" align="flex-start">
                <Image src={"/img/welcome_img.jpg"} alt="Welcome Image" />
            </Flex>
            <Flex percentage="50%" align="center">
                <Title>
                    Faites du tri, gagnez de l'argent et trouvez ce qui vous plait !
                </Title>
            </Flex>
        </Flex>
    )
};

const Image = Styled.img`
    width:90%;
`;

const Title = Styled.h1`
    font-size:5.5vw;
    font-weight:lighter;
    margin: 0;
`;