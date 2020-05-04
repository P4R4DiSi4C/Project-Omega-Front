// libs
import React from 'react';

// components
import HomeWelcome from '../../components/Home/Welcome';
import HomeSponsored from '../../components/Home/Sponsored';
import Divider from '../../components/Divider'

export default () => {
  return (
    <div>
        <HomeWelcome/>
        <Divider />
        <HomeSponsored/>
        <Divider />
    </div>
  );
};
