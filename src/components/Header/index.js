// libs
import Styled from 'styled-components';

// components
import ActiveLink from '../ActiveLink';

export default {
  Layout: Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;

    border-style:solid;
    border-color:green;
  `,
  
  Logo: Styled.img`
    height:64px;
    height:auto;
    margin-left:16px;
    margin-right:16px;

    border-style:solid;
    border-color:blue;
  `,

  FormSearch: Styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #c3e0b6;
    width: 30rem;
    padding: 2rem;
    height: 2rem;
    border-radius: 10rem;
    transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

    border-style:solid;
    border-color:blue;
  `,

  Search: Styled.input`
    font-size: 24px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    border: none;
    color: black;
    transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus,
    &:active {
      outline: none;
    }
    &::placeholder {
      color: black;
    }
  `,

  LoginBtn: Styled.button`
    width: 220px;
    height:50px;  
    border-radius: 4px;
    font-size: 24px;
    background: #c3e0b6;
    color:black;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        opacity: 0.6;
    }           

    border:3px;
    border-style:solid!important;
    border-color:blue!important;
  `,

  ActiveLink: Styled(ActiveLink)`
    font-size: 14px;
    margin: 0 10px;
  `
};