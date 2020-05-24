import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import Stars from './stars';
import Button from '../../Button';


export default ({profile_pic,username,stars,theme}) => {
    return (
        <>
            <FlexImg percentage="90%" mobile="35%">
                <Image src={profile_pic} />
            </FlexImg>
            <FlexButtons percentage="100%" align="space-between" mobile_align="center" wrap="wrap">
                <ButtonProfile color="#f7cc2f">
                    <span className="hide_mobile">SUIVRE</span>
                    <FontAwesomeIcon className="hide_desktop" icon="user-plus" size="lg"/>
                </ButtonProfile>
                <ButtonProfile color="#f7cc2f">
                    <span className="hide_mobile">FAVORI</span>
                    <FontAwesomeIcon className="hide_desktop" icon="bookmark" size="lg"/>
                </ButtonProfile>
                <ContactBtn color="#f7cc2f">
                    <span className="hide_mobile">CONTACTER</span>
                    <FontAwesomeIcon className="hide_desktop" icon="envelope" size="lg"/>
                </ContactBtn>
            </FlexButtons>
            <H2>
                {username}
            </H2>
            <Stars stars_nb={stars}/>
        </>
    )
};

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

const FlexImg = Styled(Flex)`
    height: 20vw;
    &:hover{
        cursor:pointer;
    }
    @media (max-width: 700px) {
        height: 30vw;
    }
`;

const FlexButtons = Styled(Flex)`
    margin-top:1em;
    margin-bottom:1em;
`;

const ButtonProfile = Styled(Button)`
    width:45%;
    padding:0.4rem;

    @media (max-width: 700px) {
        width:15%;
        margin:0px 8px;
    }
`;

const ContactBtn = Styled(Button)`
    margin-top:1em;
    width:100%;
    padding:0.4rem;

    @media (max-width: 700px) {
        margin-top:0;
        width:15%;
        margin:0px 8px;
    }
`;