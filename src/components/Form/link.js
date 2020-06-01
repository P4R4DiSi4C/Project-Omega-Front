import Styled from 'styled-components';

export default Styled.span`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.main};
`;