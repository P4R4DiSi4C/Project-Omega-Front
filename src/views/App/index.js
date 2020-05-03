// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import Router from '../../router';

// components
import GlobalStyle from '../../components/GlobalStyle';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import Container from '../../components/Container';
import Content from '../../components/Content';

export default () => {
  const router = useRoutes(Router);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Navbar />
        <Search placeholder="Trouver un article" />
        {router}
      </Content>
    </Container>
  );
};