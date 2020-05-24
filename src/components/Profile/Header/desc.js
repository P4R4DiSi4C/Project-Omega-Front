import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Flex from '../../Flex';
import H3 from '../../H3';
import H4 from '../../H4';


export default ({desc,location,show_verified}) => {
    return (
        <>
            <Flex w="80%" w_mobile="100%">
                <Desc>{desc}</Desc>
            </Flex>

            {show_verified &&
                <Flex w="80%" w_mobile="100%" a_items="flex-start" a_items_mobile="center" d="column">
                    <H3>Information vérifiées</H3>
                    <div>
                        <Item>
                            <FontAwesomeIcon icon="check" size="lg" color="#f7cc2f"/>
                            <H4>Email</H4>
                        </Item>
                        <Item>
                            <FontAwesomeIcon icon="check" size="lg" color="#f7cc2f"/>
                            <H4>Instagram</H4>
                        </Item>
                    </div>
                </Flex>
            }

            <Location>
                <FontAwesomeIcon icon="map-marker-alt" size="lg" color="#f7cc2f"/>
                <H4>{location}</H4>                
            </Location>
        </>
    )
};

const Item = Styled.div`
    display: flex;
    align-items: center;
    
    h4 {
        margin-left: 10px;
    }
`;

const Location = Styled(Item)`
    @media (max-width: 767.98px) {
        margin-top:2em;
    }
`;

const Desc = Styled.p`
    font-weight: lighter;
    font-size:1.2rem;
    text-align:justify;

    @media (max-width: 767.98px) {
        font-size:1rem;
    }
`;
