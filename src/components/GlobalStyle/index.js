// libs
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-family: ${props => props.theme.textFont};
        font-size: 16px;

        @media (max-width: 1199.98px) {
            font-size: 15px;
        }

        @media (max-width: 767.98px) {
            font-size: 14px;
        }
        
        @media (max-width: 325.00px) {
            font-size: 12px;
        }
    }

    .hide_mobile{
        @media (max-width: 767.98px) {
            display:none!important;
        }
    }

    .hide_desktop{
        @media (min-width: 767.98px) {
            display:none!important;
        }
    }

    .slick-prev{
        left:0!important;
        z-index:1;
    }

    .slick-next{
        right:0;
    }

    #SRLLightbox{
        z-index:1;
    }

    .slick-list{
        height:auto !important;
    }
`;