// libs
import React from 'react';

// views
import Home from './views/Home';
import About from './views/About';

export default {
  '/': () => <Home />,
  '/about': () => <About />
};