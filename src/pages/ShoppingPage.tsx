import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Shopping from '../components/Shopping';

const ShoppingPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <Shopping />
      </div>
    </MainLayout>
  );
};

export default ShoppingPage;