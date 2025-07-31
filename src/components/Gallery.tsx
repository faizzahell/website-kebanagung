import React, { useState } from 'react';
import { galleryData } from '../constants/gallery';
import { Camera, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryPhoto {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface GalleryCardProps {
  photo: GalleryPhoto;
  onClick: () => void;
}

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);
  const photosPerPage: number = 12;
  
  const totalPages = Math.ceil(galleryData.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;
  const currentPhotos = galleryData.slice(startIndex, endIndex);

  const handlePrevPage = (): void => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
  };

  const openModal = (photo: GalleryPhoto): void => {
    setSelectedImage(photo);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <section className="relative px-4 mt-16 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
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
            Momen-momen indah dan kegiatan masyarakat Desa Keban Agung dalam berbagai dokumentasi visual
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPhotos.map((photo) => (
              <GalleryCard 
                key={photo.id} 
                photo={photo} 
                onClick={() => openModal(photo)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
          <div className="flex items-center justify-between">
            <div className="text-slate-600 text-sm">
              Menampilkan {startIndex + 1}-{Math.min(endIndex, galleryData.length)} dari {galleryData.length} foto
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${currentPage === 1 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-green-700 text-white hover:bg-green-800 hover:shadow-md'
                  }
                `}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, index: number) => {
                  const page: number = index + 1;
                  const isCurrentPage: boolean = page === currentPage;
                  
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`
                          w-10 h-10 rounded-lg font-medium text-sm transition-all duration-200
                          ${isCurrentPage
                            ? 'bg-green-700 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-600 hover:bg-green-100 hover:text-green-700'
                          }
                        `}
                      >
                        {page}
                      </button>
                    );
                  }
                  
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 text-slate-400">
                        ...
                      </span>
                    );
                  }
                  
                  return null;
                })}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${currentPage === totalPages 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-green-700 text-white hover:bg-green-800 hover:shadow-md'
                  }
                `}
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{selectedImage.title}</h3>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const GalleryCard: React.FC<GalleryCardProps> = ({ photo, onClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBWODBIODBWNjBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik02MCA4MEgxNDBWMTQwSDYwVjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
  };

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2 py-1 bg-green-700 text-white text-xs font-medium rounded-full">
            {photo.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-sm text-slate-800 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
          {photo.title}
        </h4>
        <div className="mt-3 w-full bg-slate-200 rounded-full h-0.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-600 to-green-500 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;