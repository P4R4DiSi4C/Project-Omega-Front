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
            <FlexImg w="90%" w_mobile="45%">
                <Image src={profile_pic} />
            </FlexImg>
            <FlexButtons w="100%" j_content="space-between" j_content_mobile="center" f_wrap>
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
                <Stars stars_nb={stars}/>
            </H2>
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
    @media (max-width: 767.98px) {
        height: 40vw;
    }
`;

const FlexButtons = Styled(Flex)`
    margin-top:1em;
    margin-bottom:1em;
`;

const ButtonProfile = Styled(Button)`
    width:45%;
    padding:0.4rem;

    @media (max-width: 767.98px) {
        width:15%;
        margin:0px 8px;
    }
`;

const ContactBtn = Styled(Button)`
    margin-top:1em;
    width:100%;
    padding:0.4rem;

    @media (max-width: 767.98px) {
        margin-top:0;
        width:15%;
        margin:0px 8px;
    }
`;