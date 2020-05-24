// libs
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-family: ${props => props.theme.textFont};
        font-size: 16px;

        @media (max-width: 700px){
            font-size: 14px;
        }
    }

    .hide_mobile{
        @media (max-width: 700px) {
            display:none!important;
        }
    }

    .hide_desktop{
        @media (min-width: 700px) {
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
`;