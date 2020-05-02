// libs
import Styled from 'styled-components';

// components
import ActiveLink from '../ActiveLink';

export default {
  Layout: Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:flex-start;

    border:solid;
    border-color:green;
  `,
  
  Logo: Styled.img`
    width: 5%;

  `,

  Menu: Styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    
    margin-left:auto;
  `,

  LoginBtn: Styled.button`
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
  `
};