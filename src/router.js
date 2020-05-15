// libs
import React from 'react';

// views
import Home from './views/Home';
import Store from './views/Store';
import Profile from './views/Profile';

export default {
  '/': () => <Home />,
  '/store/:id': ({id}) => <Store store_id={id}/>,
  '/profile/:id': ({id}) => <Profile profile_id={id}/>
};