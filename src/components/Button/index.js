// libs
import Styled from 'styled-components';

export default Styled.button`
    background: none;
    border: 2px ${props => props.color} solid;
    color: ${props => props.color};
    width: auto;
    font-weight: lighter;
    padding: 0.1rem 0.4rem;
    transition: 0.7s;
    text-decoration: none;

    &:hover, &:focus{
        color: #fff;
        border-color: ${props => props.color};
        box-shadow: inset 0 0 0 2em ${props => props.color};
        cursor:pointer;
    };
`;