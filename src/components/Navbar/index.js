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

const Layout = Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
  `;


/*  LoginBtn: Styled.button`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    height: 35px;
    padding: 0 8px;
    color: #09B1BA;
    display: block;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: 1px solid currentColor;
    border-radius: 4px;
    outline: 0;
  `*/