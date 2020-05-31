// libs
import React from 'react';
import { useEffect } from "react";
import { useRoutes } from 'raviger';
// views
import Home from './views/Home';
import Store from './views/Store';
import Profile from './views/Profile';
import Product from './views/Product';

const routes = {
  '/': () => <Home />,
  '/store/:id': ({id}) => <Store store_id={id}/>,
  '/profile/:id': ({id}) => <Profile profile_id={id}/>,
  '/product/:id': ({id}) => <Product product_id={id}/>
};

const Routes = () => {
    const Routes = useRoutes(routes);
    useEffect(() => window.scrollTo(0, 0));
    return Routes || "Not Found";
  };
  
export default Routes;