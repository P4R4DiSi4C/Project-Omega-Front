// libs
import React from 'react';

// views
import Home from './views/Home';
import Store from './views/Store';

export default {
  '/': () => <Home />,
  '/store/:id': ({id}) => <Store store_id={id}/>
};