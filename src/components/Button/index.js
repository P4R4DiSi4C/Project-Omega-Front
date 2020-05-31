// libs
import Styled from 'styled-components';

export default Styled.button`
    background: ${props => props.solid ? props.theme.main : "none"};
    border: ${props => props.solid ? "none" : "2px solid " + props.theme.main};
    color: ${props => props.solid ? "white" : props.theme.main};
    border-radius: 1.5rem;
    width: auto;
    font-weight: lighter;
    padding: 0.2rem 0.8rem;
    outline:none;
    text-decoration: none;

    &:hover, &:focus{
        cursor:pointer;
    };
`;