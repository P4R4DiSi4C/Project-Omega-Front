// libs
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-family: ${props => props.theme.textFont};
    }

    .tableprod tr:first-child td {
        border-top: 0;
    }
    .tableprod tr td:first-child {
        border-left: 0;
    }
    .tableprod tr td:first-child {
        border-bottom: 1;
    }
    .tableprod tr:last-child td {
        border-bottom: 0;
    }
    .tableprod tr td:last-child {
        border-right: 0;
    }
    table .text-left{
        text-align:left;
    }
    table .text-right{
        text-align:right;
    }
`;