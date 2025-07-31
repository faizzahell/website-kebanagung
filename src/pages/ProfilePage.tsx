import React from 'react';
import MainLayout from '../layouts/MainLayout';
import History from '../components/History';
import Demografis from '../components/Demografis';


const ProfilePage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <History />
      <Demografis />
    </MainLayout>
  );
};

export default ProfilePage;