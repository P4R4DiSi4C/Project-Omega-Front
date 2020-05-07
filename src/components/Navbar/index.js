import React from 'react'

// libs
import Styled from 'styled-components';

// components
import Brand from './Brand';
import Links from './Links';
import Menu from './Menu';


export default () => {
  return (
    <Layout>
      <Brand />
      <Links />
      <Menu />
    </Layout>
  )
};

const Layout = Styled.nav`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    flex-wrap:wrap;
`;