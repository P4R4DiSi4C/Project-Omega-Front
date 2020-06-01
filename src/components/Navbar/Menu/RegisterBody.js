import React, {useState} from 'react';

// libs
import Styled from 'styled-components';
import {usePath, navigate} from 'raviger';


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import ModalHeader from '../../Modal/header';
import ModalBody from '../../Modal/body';
import Button from '../../Button';

export default (props) => {    
    const path = usePath();

    return(
        <>
            <ModalHeader title="Inscris-toi sur Zodak !" sub_title="Notre plateforme te permets de vendre tes affaires rapidement et sans frais."/>
            <ModalBody>
                REGISTER
            </ModalBody>
        </>
    );
};