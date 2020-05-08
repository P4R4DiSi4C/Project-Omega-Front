import React,{useState, useCallback} from 'react';

// libs
import Styled from 'styled-components';

// components
import Brand from './Brand';
import Links from './Links';
import Menu from './Menu';


export default () => {
    const [extended, setExtended] = useState(false);

    const toggleNavbar = useCallback(() => {
        setExtended(!extended)
    }, [extended]);

    return (
        <Layout>
            <Brand />
            <Links is_extended={extended} />
            <Menu toggle={toggleNavbar} is_extended={extended} />
        </Layout>
    )
};

const Layout = Styled.nav`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    flex-wrap:wrap;
`;