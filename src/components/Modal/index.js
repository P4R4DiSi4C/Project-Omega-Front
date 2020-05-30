import React from 'react';

// libs
import Styled from 'styled-components';

export default (props) => {
    return (
        <>
            { props.is_open &&
            <>
                <Backdrop onClick={() => props.toggle_modal()}>
                    <Modal onClick={(e) => {
                        //stop clicks getting to the overlay
                        e.stopPropagation();
                    }}>
                        {props.children}
                    </Modal>
                </Backdrop>
            </>
            }
        </>
    );
};

const Modal = Styled.div`
    width: 95vw;
    max-width: 450px;
    height: 70vh;
    max-height: 700px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    border: 3px solid orange;
    background-color: #ffffff;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 2rem 2rem 2rem 2rem;
`;

const Backdrop = Styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    position: fixed;
    background-color: rgba(0,0,0,.7);
    padding-top: 2%;
    align-items: center;
    display: flex;
`;