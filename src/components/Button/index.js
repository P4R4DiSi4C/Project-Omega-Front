// libs
import Styled from 'styled-components';

export default Styled.button`
    background: ${props => props.bg_color ? props.bg_color : "none"};
    border: ${props => props.bg_color ? "none" : "2px solid " + props.color};
    border-radius: 1.5rem;
    color: ${props => props.color};
    width: auto;
    font-weight: lighter;
    padding: 0.2rem 0.8rem;
    transition: 0.7s;
    outline:none;
    text-decoration: none;

    &:hover, &:focus{
        cursor:pointer;
    };
`;