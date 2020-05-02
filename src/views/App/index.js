// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import Router from '../../router';

// components
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Container from '../../components/Container';
import Content from '../../components/Content';

export default () => {
  const router = useRoutes(Router);

  return (
    <Container>
      <Content>
        <Header.Layout>
          <Header.Logo src={"/img/logo.png"} />
        
          <Search placeholder="Trouver un article" />
          
          <Header.Menu>
            <Header.LoginBtn>
              S'inscrire | Se connecter
            </Header.LoginBtn>
          </Header.Menu>
        </Header.Layout>
        <Navbar.Layout>
          <nav>
            <ul class="menu">
                <li class="logo"><a href="#">Invisible App</a></li>
                <li class="item"><a href="#">Home</a></li>
                <li class="item"><a href="#">About</a></li>
                <li class="item"><a href="#">Services</a></li>
                <li class="item"><a href="#">Features</a></li>
                <li class="item"><a href="#">Blog</a></li>
                <li class="item"><a href="#">Contact</a>
                </li>
                <li class="item button"><a href="#">Log In</a></li>
                <li class="item button secondary"><a href="#">Sign Up</a></li>
                <li class="toggle"><a href="#"><FontAwesomeIcon icon={faBars} /></a></li>
            </ul>
        </nav>
        </Navbar.Layout>
      </Content>
    </Container>
  );
};