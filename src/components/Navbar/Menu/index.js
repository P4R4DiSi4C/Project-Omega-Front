import React from 'react'

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Flex from '../../Flex';

export default () => {
    return (
        <>
            <FlexBtn percentage="20%" mobile="100%" mobile_align="center" align="flex-end">
                    <Btn>Connexion</Btn>
            </FlexBtn>
            <FlexHamburger percentage="20%" align="flex-end">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </FlexHamburger>
        </>
    )
};

const FlexBtn = Styled(Flex)`
    order:2;

    @media (max-width: 768px) {
        order:1;
    }
`;

const FlexHamburger = Styled(Flex)`
    display:none;
    text-align: right;

    @media (max-width: 768px) {
        display:block;
    }
`;

const Btn = Styled.button`
    background: teal;
    border: 1px #006d6d solid;
    color: white;
    width: auto;

    &&:hover{
        opacity:0.8;
        cursor:pointer;
    }
`;