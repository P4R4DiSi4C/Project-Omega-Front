import React from 'react';

// libs
import Styled from 'styled-components';


export default (props) => {
    return (
        <>
            <Title>{props.title}</Title>
            <SubTitle>{props.sub_title}</SubTitle>
        </>
    );
};

const Title = Styled.span`
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
`;

const SubTitle = Styled.p`
    font-size: 1.2rem;
    font-weight: lighter;
    text-align: center;
`;