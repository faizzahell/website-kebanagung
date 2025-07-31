import React from 'react';

const HeroHeader: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      />
      
      <div className="absolute inset-0 bg-black opacity-40" />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Selamat Datang
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-yellow-300">
          Website Resmi Desa Keban Agung
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Sumber informasi terbaru tentang pemerintahan di Desa Keban Agung
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto">
            Jelajahi Desa
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto">
            Info Terkini
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 300" className="w-full h-auto">
          <polygon 
            points="100,300 100,150 200,100 300,150 300,300" 
            fill="rgba(0,0,0,0.3)"
          />
          <polygon 
            points="350,300 350,180 450,130 550,180 550,300" 
            fill="rgba(0,0,0,0.2)"
          />
          <polygon 
            points="600,300 600,160 700,110 800,160 800,300" 
            fill="rgba(0,0,0,0.3)"
          />
          <polygon 
            points="850,300 850,140 950,90 1050,140 1050,300" 
            fill="rgba(0,0,0,0.2)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroHeader;