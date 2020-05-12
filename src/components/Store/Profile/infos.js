import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Flex from '../../Flex';
import H1 from '../../H1';
import Stars from './stars';
import Button from '../../Button';


export default ({profile_pic,username,stars}) => {
    return (
        <>
            <Image src={profile_pic} />
            <FlexButtons percentage="100%" align="space-between">
                <ButtonProfile color="#f7cc2f">
                    SUIVRE
                </ButtonProfile>
                <ButtonProfile color="#f7cc2f">
                    CONTACTER
                </ButtonProfile>
            </FlexButtons>
            <H1>
                {username}
            </H1>
            <Stars stars_nb={stars}/>
        </>
    )
};

const Image = Styled.img`
    width:90%;
`;

const FlexButtons = Styled(Flex)`
    margin-top:1em;
    margin-bottom:1em;
`;

const ButtonProfile = Styled(Button)`
    width:45%;
    padding:0.4rem;
`;