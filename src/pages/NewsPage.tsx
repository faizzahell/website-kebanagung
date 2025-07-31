import React from 'react';
import MainLayout from '../layouts/MainLayout';
import News from '../components/News';

const NewsPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <News />
    </MainLayout>
  );
};

export default NewsPage;