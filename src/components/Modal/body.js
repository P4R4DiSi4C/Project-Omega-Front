import React from 'react';

// libs
import Styled from 'styled-components';


export default (props) => {
    return (
        <ModalBody>
            {props.children}
        </ModalBody>
    );
};

const ModalBody = Styled.div`
    padding-top: 2rem;
`;