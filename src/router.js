// libs
import React from 'react';

// views
import Home from './views/Home';
import Store from './views/Store';
import Profile from './views/Profile';
import Product from './views/Product';

export default {
  '/': () => <Home />,
  '/store/:id': ({id}) => <Store store_id={id}/>,
  '/profile/:id': ({id}) => <Profile profile_id={id}/>,
  '/product/:id': ({id}) => <Product product_id={id}/>
};