import React from 'react';
import MainLayout from '../layouts/MainLayout';
import IDM from '../components/IDM';

const IDMPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <IDM />
      </div>
    </MainLayout>
  );
};

export default IDMPage;