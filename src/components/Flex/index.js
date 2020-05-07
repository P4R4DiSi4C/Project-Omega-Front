// libs
import Styled from 'styled-components';

export default Styled.div`
    display:flex;
    align-items:${props => props.align_items ? props.align_items : "center"};
    width:${props => props.percentage};
    justify-content:${props => props.align};
    flex-direction:${props => props.direction ? props.direction : "row"};
    flex-wrap:${props => props.wrap ? props.wrap :"nowrap"};

    @media (max-width: 768px) {
        width:${props => props.mobile ? props.mobile : props.percentage};
        justify-content:${props => props.mobile_align ? props.mobile_align : props.align};
    }
`;