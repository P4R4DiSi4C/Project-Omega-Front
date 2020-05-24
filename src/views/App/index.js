// libs
import React from 'react';
import Routes from '../../router';

// components
import GlobalStyle from '../../components/GlobalStyle';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import Container from '../../components/Container';
import Content from '../../components/Content';

export default () => {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Navbar />
        <Search placeholder="Trouver un article" />
        <Routes />
      </Content>
    </Container>
  );
};