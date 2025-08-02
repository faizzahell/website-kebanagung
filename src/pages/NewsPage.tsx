import React from 'react';
import MainLayout from '../layouts/MainLayout';
import News from '../components/News';

const NewsPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <News />
      </div>
    </MainLayout>
  );
};

export default NewsPage;