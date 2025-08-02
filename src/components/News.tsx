import React, { useState } from 'react';
import { newsData } from '../constants/newsData';
import { Eye, CalendarDays, User, ChevronLeft, ChevronRight, FileText, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  date: string;
  views: number;
}

interface NewsCardProps {
  news: NewsItem;
}

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage: number = 9;
  
  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  const handlePrevPage = (): void => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <FileText className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Berita Terkini</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Berita <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Keban Agung
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
          <div className="flex items-center justify-between">
            <div className="text-slate-600 text-sm">
              Menampilkan {startIndex + 1}-{Math.min(endIndex, newsData.length)} dari {newsData.length} berita
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
    </section>
  );
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBWODBIODBWNjBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik02MCA4MEgxNDBWMTQwSDYwVjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
          {news.title}
        </h3>
        
        <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1 leading-relaxed">
          {news.description}
        </p>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>{news.views.toLocaleString('id-ID')}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
              <CalendarDays className="w-3 h-3" />
              {news.date}
            </span>
            <button className="group/btn text-green-700 hover:text-green-800 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Baca Selengkapnya
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
        
        <div className="mt-3 w-full bg-slate-200 rounded-full h-0.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-600 to-green-500 w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default News;