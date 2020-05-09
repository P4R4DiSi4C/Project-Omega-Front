import React from 'react'

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// components
import Flex from '../Flex';

export default (props) => {
    return (
        <Layout percentage="100%" align="center">
            <Content>
                <Icon icon={faSearch} />
                <Bar placeholder={props.placeholder} />
            </Content>
        </Layout>
    )
};


const Layout = Styled(Flex)`
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    margin-bottom:1em;
`;

const Content = Styled.div`
    width:50%;
    height:35px;
    border-radius: 4px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f5f6f7;
    @media (max-width: 768px) {
        width:100%;
    }
`;

const Bar = Styled.input`
    border: none;
    flex: 1;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;

    &:focus{
        outline:none;
    }
`;

const Icon = Styled(FontAwesomeIcon)`
    color: #bbb;
    padding-left: 2px;
`;