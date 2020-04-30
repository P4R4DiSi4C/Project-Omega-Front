// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import Router from '../../router';

// components
import Box from '../../components/Box';
import Navbar from '../../components/Navbar';

export default () => {
  const router = useRoutes(Router);

  return (
    <Box
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
    </Box>
  );
};