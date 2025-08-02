import React from 'react';
import MainLayout from '../layouts/MainLayout';
import MapEmbed from '../components/MapEmbed';
import Geographical from '../components/Geographical';

const ListingPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <MapEmbed />
        <Geographical />
      </div>
    </MainLayout>
  );
};

export default ListingPage;