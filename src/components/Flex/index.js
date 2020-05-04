// libs
import Styled from 'styled-components';

export default Styled.div`
    display:flex;
    align-items:center;
    width:${props => props.percentage};
    justify-content:${props => props.align};
    flex-direction:${props => props.direction ? props.direction : "row"};
`;