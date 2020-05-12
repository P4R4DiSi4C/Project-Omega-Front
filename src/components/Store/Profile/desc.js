import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Flex from '../../Flex';


export default ({desc,location}) => {
    return (
        <>
            <Flex percentage="80%">
                <Desc>{desc}</Desc>
            </Flex>
            <Flex percentage="auto">
                <Location>
                    <FontAwesomeIcon icon="map-marker-alt" size="lg" color="#f7cc2f"/> {location} 
                </Location>
            </Flex>
        </>
    )
};


const Desc = Styled.p`
    font-weight: lighter;
    font-size:1.2rem;
    text-align:justify;
`;

const Location = Styled.span`
    font-weight: lighter;
    font-size:1.2rem;
`;