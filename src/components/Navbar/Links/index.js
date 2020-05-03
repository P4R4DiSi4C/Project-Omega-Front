import React from 'react'

// libs
import Styled from 'styled-components';

import Activelink from '../../ActiveLink';
import VDivider from '../../VerticalDivider';

export default () => {
    return (
        <Layout>
            <ActiveLink href="/" exact>Home</ActiveLink>
            <VDivider />
            <ActiveLink href="/about" exact>Home</ActiveLink>
            <VDivider />
            <ActiveLink href="/about" exact>Home</ActiveLink>
        </Layout>
    )
};

const Layout = Styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:center;
`;

const ActiveLink = Styled(Activelink)`
    padding:12px 16px;
    &:hover{
        background-color:rgba(17,17,17,0.02)
    }
  `;