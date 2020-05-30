// libs
import Styled from 'styled-components';

export default Styled.div`
    display:flex;
    align-items:${props => props.a_items ? props.a_items : "center"};
    width:${props => props.w};
    justify-content:${props => props.j_content ? props.j_content : "center"};
    flex-direction:${props => props.d ? props.d : "row"};
    flex-wrap:${props => props.f_wrap ? "wrap" :"nowrap"};

    // Smartphones
    @media (max-width: 767.98px) {
        width:${props => props.w_mobile ? props.w_mobile : props.w};
        justify-content:${props => props.j_content_mobile ? props.j_content_mobile : props.j_content};
        align-items:${props => props.a_items_mobile ? props.a_items_mobile : props.a_items};
    }

    /*
    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        width:${props => props.w_land ? props.w_land : props.w};
        justify-content:${props => props.j_content_land ? props.j_content_land : props.j_content};
        align-items:${props => props.a_items_land ? props.a_items_land : props.a_items};
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        width:${props => props.w_tablet ? props.w_tablet : props.w};
        justify-content:${props => props.j_content_tablet ? props.j_content_tablet : props.j_content};
        align-items:${props => props.a_items_tablet ? props.a_items_tablet : props.a_items};
    }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) {
        width:${props => props.w_desk ? props.w_desk : props.w};
        justify-content:${props => props.j_content_desk ? props.j_content_desk : props.j_content};
        align-items:${props => props.a_items_desk ? props.a_items_desk : props.a_items};
    }*/
`;