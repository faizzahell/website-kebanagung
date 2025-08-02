import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Documentation from '../components/Documentation';
import Regulation from '../components/Regulation';

const DocumentationPage: React.FC = () => {
  return (
    <MainLayout showHero={true}>
      <div className="mt-16">
        <Regulation />
        <Documentation />
      </div>
    </MainLayout>
  );
};

export default DocumentationPage;