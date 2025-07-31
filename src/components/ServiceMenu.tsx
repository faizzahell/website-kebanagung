import React from 'react';
import type { MenuItem } from '../constants/menuItem';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

interface ServiceMenuProps {
  menuItems: MenuItem[];
}

const ServiceMenu: React.FC<ServiceMenuProps> = ({ menuItems }) => {
  const serviceItems = menuItems.filter(item => item.name !== 'Beranda');

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <Zap className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Layanan Digital</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Layanan <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Akses berbagai layanan dan informasi penting dari Pemerintah Desa Keban Agung dengan mudah dan cepat
          </p>
        </div>

        <div className="md:hidden mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Layanan Cepat
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-1"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {serviceItems.slice(0, 8).map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group flex flex-col items-center p-3 bg-gradient-to-br from-green-700 to-green-600 rounded-xl hover:from-green-800 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2.5 mb-2 shadow-sm group-hover:bg-white/30 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white text-center leading-tight opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {getMobileServiceName(item.name)}
                    </span>
                    <div className="w-0 group-hover:w-full h-0.5 bg-white/30 rounded-full mt-1 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Semua Layanan Desa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group relative bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <IconComponent className="w-7 h-7 text-green-700 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 bg-green-700/10 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-green-700" />
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {getServiceDescription(item.name)}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-600 to-green-500 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                        </div>
                        <span className="text-xs text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Akses
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-green-700/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-700/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzFFNzA0QiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Butuh Bantuan Lebih Lanjut?
              </h3>
              <p className="text-green-100 mb-6 max-w-xl mx-auto">
                Tim kami siap membantu Anda mengakses layanan yang dibutuhkan
              </p>
              <button className="group bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <span>Hubungi Petugas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getMobileServiceName = (serviceName: string): string => {
  const mobileNames: Record<string, string> = {
    'Profil Desa': 'Profil',
    'Infografis': 'Infografis',
    'Listing': 'IDM',
    'IDM': 'IDM',
    'Berita': 'Berita',
    'Belanja': 'Belanja',
    'PPID': 'PPID',
    'Galeri': 'Galeri'
  };
  return mobileNames[serviceName] || serviceName;
};

const getServiceDescription = (serviceName: string): string => {
  const descriptions: Record<string, string> = {
    'Profil Desa': 'Informasi lengkap tentang sejarah, visi misi, dan struktur organisasi Desa Keban Agung',
    'Infografis': 'Data dan statistik desa dalam bentuk visual yang mudah dipahami dan menarik',
    'Listing': 'Daftar lengkap layanan, fasilitas, dan infrastruktur yang tersedia di desa',
    'IDM': 'Indeks Desa Membangun untuk mengukur tingkat perkembangan dan kemajuan desa',
    'Berita': 'Berita terkini, pengumuman penting, dan update kegiatan desa yang up-to-date',
    'Belanja': 'Platform belanja online untuk produk-produk unggulan dan UMKM desa',
    'PPID': 'Layanan informasi publik dan dokumentasi resmi dari pemerintah desa',
    'Galeri': 'Kumpulan foto dan video kegiatan, acara, dan perkembangan desa'
  };
  return descriptions[serviceName] || 'Layanan desa yang tersedia untuk masyarakat';
};

export default ServiceMenu;