import React from 'react'

// libs
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default (props) => {
    return (
        <Layout>
            <Content>
                <Icon icon={faSearch} />
                <Bar {...props} />
            </Content>
        </Layout>
    )
};

const Layout = Styled.div`
    width: 50%;
    margin-left:5%;
`;

const Content = Styled.div`
    height:35px;
    border-radius: 4px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f5f6f7;
`;

const Bar = Styled.input`
    border: none;
    flex: 1;
    padding: 10px;

    &:focus{
        outline:none;
    }
`;

const Icon = Styled(FontAwesomeIcon)`
    color: #bbb;
    padding-left: 2px;
`;