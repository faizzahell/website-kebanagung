import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <Gallery />
    </MainLayout>
  );
};

export default GalleryPage;