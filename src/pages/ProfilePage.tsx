import React from 'react';
import MainLayout from '../layouts/MainLayout';
import History from '../components/History';
import Demographics from '../components/Demographics';

const ProfilePage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <History />
        <Demographics />
      </div>
    </MainLayout>
  );
};

export default ProfilePage;