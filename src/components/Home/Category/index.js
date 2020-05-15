import React from 'react';

// libs
import Styled from 'styled-components';


export default ({img_src, cat_title}) => {
    return (
        <CatWrapper>
            <Image src={img_src} />
            <Text>{cat_title}</Text>
        </CatWrapper>
    )
};

const CatWrapper = Styled.div`
    display: inline-block;
    position: relative;
    width:30%;

    @media (max-width: 768px) {
        width:45%;
    }
`;

const Text = Styled.span`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    font-size: 2rem;
    color: #fcfcfc;
    text-decoration: none solid rgb(252, 252, 252);
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Image = Styled.img`
    opacity:0.8;
    width:100%;
`;