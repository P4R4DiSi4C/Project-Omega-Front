// libs
import React from 'react';
import Routes from '../../router';

// components
import GlobalStyle from '../../components/GlobalStyle';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import Container from '../../components/Container';
import Content from '../../components/Content';
import ConnectionModal from '../../components/Navbar/Menu/ConnectionModal';
import {useQueryParams} from 'raviger';

export default () => {
    const [query, ] = useQueryParams();
    const connection_type = ['0','1','2'];

    return (
        <Container>
            <GlobalStyle />
            <Content>
                <Navbar />
                <Search placeholder="Trouver un article" />
                <Routes />
            </Content>
            {
                // Connection modal
                (query.m && query.c && connection_type.includes(query.c)) &&
                <ConnectionModal modal_type={query.c} />             
            }
        </Container>
    );
};