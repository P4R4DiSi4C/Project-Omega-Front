// libs
import React from 'react';

// components
import HomeWelcome from '../../components/Home/Welcome';
import HomeSponsored from '../../components/Home/Sponsored';
import HomeTrending from '../../components/Home/Trending';
import HomeCategories from '../../components/Home/Categories';
import Divider from '../../components/Divider';

export default () => {
  return (
    <>
        <HomeWelcome />
        <Divider />
        <HomeSponsored />
        <Divider />
        <HomeTrending />
        <Divider />
        <HomeCategories />
        <Divider />
    </>
  );
};
