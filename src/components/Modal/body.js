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
    display:inherit;
    flex-direction:inherit;
    justify-content:inherit;
    align-items:inherit;
    padding-top: 1rem;
    width: 100%;
`;