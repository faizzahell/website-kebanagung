import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroHeader from '../components/HeroHeader';
import ServiceMenu from '../components/ServiceMenu';
import { menuItems } from '../constants/menuItem';
import MapEmbed from '../components/MapEmbed';
import Welcome from '../components/Welcome';
import CarouselStructure from '../components/CarouselStructure';
import PopulationApbSection from '../components/PopulationApbSection';
import NewsSection from '../components/NewsSection';
import GallerySection from '../components/GallerySection';
import PotentialSection from '../components/PotentialSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <HeroHeader />
      <ServiceMenu menuItems={menuItems} />
      <Welcome />
      <CarouselStructure />
      <MapEmbed />
      <PopulationApbSection />
      <PotentialSection />
      <NewsSection />
      <GallerySection />
    </MainLayout>
  );
};

export default HomePage;