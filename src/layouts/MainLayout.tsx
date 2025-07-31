import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { menuItems } from '../constants/menuItem';

interface MainLayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showHero = false }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar menuItems={menuItems} />
      <main className={showHero ? "" : "pt-16"}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;