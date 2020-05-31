import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import Icon from '../../Icon';

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
                            <Icon icon="check"/>
                            <span>Email</span>
                        </Item>
                        <Item>
                            <Icon icon="check"/>
                            <span>Instagram</span>
                        </Item>
                    </div>
                </Flex>
            }

            <Location>
                <Icon icon="map-marker-alt"/>
                <span>{location}</span>                
            </Location>
        </>
    )
};

const Item = Styled(H4)`
    display: flex;
    align-items: center;
    
    span {
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
