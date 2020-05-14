// libs
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-family: ${props => props.theme.textFont};
    }

    .hide_mobile{
        @media (max-width: 768px) {
            display:none!important;
        }
    }

    .hide_desktop{
        @media (min-width: 768px) {
            display:none!important;
        }
    }
`;