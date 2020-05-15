// libs
import React from 'react';

// components
import ProfileHeader from '../../components/Profile/Header';
import ProfileStores from '../../components/Profile/Stores';
import Divider from '../../components/Divider';

export default ({profile_id}) => {
  return (
    <>
        <ProfileHeader username="AliceMerveille"/>
        <Divider /> 
        <ProfileStores />
    </>
  );
};