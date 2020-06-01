import React, {useEffect} from 'react';

import {navigate, usePath} from 'raviger';

// libs
import Styled from 'styled-components';

export default (props) => {

    // Disable body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    });

    function close_modal(){ 
        document.body.style.overflow = '';
        navigate(path);
    };

    const path = usePath();
    return (
        <>
            <Backdrop onClick={() => close_modal()}>
                <Modal onClick={(e) => {
                    //stop clicks getting to the overlay
                    e.stopPropagation();
                }}>
                    {props.children}
                </Modal>
            </Backdrop>
        </>
    );
};

const Modal = Styled.div`
    width: 95vw;
    max-width: 450px;
    min-height: 65vh;
    max-height: 95%;
    overflow-y: scroll;
    border: 3px solid orange;
    background-color: #ffffff;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 2rem 2rem 2rem 2rem;

    // Hide Scrollbar
    &::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
`;

const Backdrop = Styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    position: fixed;
    background-color: rgba(0,0,0,.7);
    align-items: center;
    justify-content: center;
    display: flex;
`;