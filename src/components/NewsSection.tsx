/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { newsData } from "../constants/newsData";
import { Eye, CalendarDays, User, ArrowRight, TrendingUp, FileText } from "lucide-react";

const NewsSection = () => {
  const slicedData = newsData.slice(0, 7);
  const featuredNews = slicedData[0];
  const regularNews = slicedData.slice(1);

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Berita Terkini</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Berita <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Keban Agung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1 lg:row-span-2">
            <FeaturedNewsCard news={featuredNews} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularNews.map((news) => (
              <RegularNewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <div className="text-right">
          <Link
            to="/struktur-desa"
            className="inline-block group"
          >
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Lihat berita lebih lengkap</span>
              <div className="w-0 group-hover:w-2 h-2 bg-white/30 rounded-full transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

function FeaturedNewsCard({ news }: { news: any }) {
  return (
    <div className="group h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-green-100/50 hover:shadow-2xl transition-all duration-500 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white text-xs font-semibold rounded-full shadow-lg">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            Featured
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <h3 className="font-bold text-xl lg:text-2xl text-slate-800 mb-4 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
          {news.title}
        </h3>
        
        <p className="text-slate-600 text-justify mb-6 line-clamp-4 leading-relaxed flex-1">
          {news.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-500">
              <User className="w-4 h-4" />
              <span className="font-medium">{news.author}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Eye className="w-4 h-4" />
              <span>{news.views.toLocaleString('id-ID')} views</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
              <CalendarDays className="w-4 h-4" />
              <span>{news.date}</span>
            </div>
            <button className="group/btn text-green-700 hover:text-green-800 font-semibold text-sm flex items-center gap-1">
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegularNewsCard({ news }: { news: any }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
              Baca
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
}

export default NewsSection;