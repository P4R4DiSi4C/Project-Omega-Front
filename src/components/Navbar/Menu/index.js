import React from 'react'

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default (props) => {
    return (
        <Layout>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Layout>
    )
};

const Layout = Styled.div`
        display:flex;
        align-items:center;
        width:20%;
        justify-content:flex-end;
    `;
