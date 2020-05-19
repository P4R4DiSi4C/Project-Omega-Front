// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import SimpleReactLightbox from "simple-react-lightbox";

// components
import App from './views/App';

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import './fontawesome.js';


// theme
const theme = {
    textFont: '-apple-system, BlinkMacSystemFont, sans-serif'
  };

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>
  </ThemeProvider>,
  document.getElementById('root')
);
