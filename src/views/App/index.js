// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import Router from '../../router';

// components
import Box from '../../components/Box';
import Header from '../../components/Header';

import Container from '../../components/Container';

export default () => {
  const router = useRoutes(Router);

  return (
    <Container>
      <Header.Layout>
        <Header.Logo src={'/img/logo.png'}/>
        <Header.FormSearch>
          <Header.Search placeholder="Trouver un article ..." />
        </Header.FormSearch>
        <Header.LoginBtn>
          Se connecter
        </Header.LoginBtn>
      </Header.Layout>
    </Container>

    /*<Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <Navbar.Layout>
        <Navbar.ActiveLink href="/" exact>Home</Navbar.ActiveLink>
        <Navbar.ActiveLink href="/about" exact>About</Navbar.ActiveLink>
      </Navbar.Layout>
      {router}
    </Box>*/
  );
};