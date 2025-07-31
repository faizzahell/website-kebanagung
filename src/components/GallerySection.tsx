/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { galleryData } from '../constants/gallery';
import { Camera, Images, Eye, ArrowRight, Play, FileText } from 'lucide-react';

const GallerySection = () => {
  const recentPhotos = galleryData.slice(0, 9);
  const featuredPhoto = recentPhotos[0];
  const regularPhotos = recentPhotos.slice(1, 9);

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <Camera className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Visual Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Galeri <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Momen-momen indah dan kegiatan masyarakat Desa Sidomulyo dalam berbagai dokumentasi visual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-2 lg:row-span-2">
            <FeaturedPhotoCard photo={featuredPhoto} />
          </div>

          {regularPhotos.map((photo, index) => (
            <RegularPhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={<Images className="w-6 h-6" />}
            value={galleryData.length}
            label="Total Foto"
            color="green"
          />
          <StatCard 
            icon={<Camera className="w-6 h-6" />}
            value="24"
            label="Album"
            color="green"
          />
          <StatCard 
            icon={<Eye className="w-6 h-6" />}
            value="15.2K"
            label="Views"
            color="green"
          />
          <StatCard 
            icon={<Play className="w-6 h-6" />}
            value="8"
            label="Video"
            color="green"
          />
        </div>

        <div className="text-right">
          <Link
            to="/struktur-desa"
            className="inline-block group"
          >
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Lihat galeri lebih lengkap</span>
              <div className="w-0 group-hover:w-2 h-2 bg-white/30 rounded-full transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

function FeaturedPhotoCard({ photo }: { photo: any }) {
  if (!photo) return null;
  
  return (
    <div className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-green-100/50 hover:shadow-2xl transition-all duration-500">
      <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white text-xs font-semibold rounded-full shadow-lg">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            Featured
          </span>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <h3 className="text-white font-bold text-xl lg:text-2xl mb-2">
            {photo.title}
          </h3>
          {photo.description && (
            <p className="text-white/90 text-sm lg:text-base line-clamp-2 mb-4">
              {photo.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Camera className="w-4 h-4" />
              <span>Foto Utama</span>
            </div>
            <button className="group/btn bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-white/30 transition-colors duration-200 flex items-center gap-2">
              Lihat Detail
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegularPhotoCard({ photo, index }: { photo: any; index: number }) {
  const isLarge = index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7;
  
  return (
    <div className={`group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${isLarge ? 'lg:row-span-1' : ''}`}>
      <div className={`relative overflow-hidden ${isLarge ? 'h-48 lg:h-56' : 'h-32 lg:h-40'}`}>
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {index + 2}
          </div>
        </div>
      </div>
      
      <div className="p-3 lg:p-4">
        <h4 className="font-semibold text-sm lg:text-base text-slate-800 line-clamp-1 group-hover:text-green-700 transition-colors duration-300">
          {photo.title}
        </h4>
        {photo.category && (
          <span className="inline-block mt-2 text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
            {photo.category}
          </span>
        )}
        
        <div className="mt-3 w-full bg-slate-200 rounded-full h-0.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-600 to-green-500 w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ 
  icon, 
  value, 
  label, 
  color 
}: { 
  icon: React.ReactNode; 
  value: string | number; 
  label: string; 
  color: 'green' | 'blue' | 'purple' | 'orange';
}) {
  const colorClasses = {
    green: 'from-green-700 to-green-600 bg-green-100 text-green-700',
    blue: 'from-blue-700 to-blue-600 bg-blue-100 text-blue-700',
    purple: 'from-purple-700 to-purple-600 bg-purple-100 text-purple-700',
    orange: 'from-orange-700 to-orange-600 bg-orange-100 text-orange-700',
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} rounded-xl flex items-center justify-center shadow-lg text-white`}>
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
            {typeof value === 'number' ? value.toLocaleString('id-ID') : value}
          </div>
          <div className="text-sm font-medium text-slate-600">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;