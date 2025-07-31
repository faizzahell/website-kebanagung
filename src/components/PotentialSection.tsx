/* eslint-disable @typescript-eslint/no-explicit-any */
import { potential } from '../constants/potential';
import { Sprout, Factory, Briefcase, TrendingUp, ArrowRight, Star, MapPin } from 'lucide-react';
import { useRef } from 'react';

const groupedPotential = potential.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof potential>);

const categoryIcons: Record<string, React.ReactNode> = {
  'Pertanian': <Sprout className="w-6 h-6" />,
  'Industri': <Factory className="w-6 h-6" />,
  'Pariwisata': <MapPin className="w-6 h-6" />,
  'UMKM': <Briefcase className="w-6 h-6" />,
  'Perikanan': <TrendingUp className="w-6 h-6" />,
  'Peternakan': <Star className="w-6 h-6" />,
};

const PotentialSection = () => {
  const categories = Object.entries(groupedPotential);
  
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Potensi Unggulan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Potensi <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Beragam potensi sumber daya dan kekayaan alam Desa Sidomulyo yang dapat dikembangkan untuk kemajuan masyarakat
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map(([category, items]) => (
            <CategoryOverviewCard 
              key={category} 
              category={category} 
              count={items.length}
              icon={categoryIcons[category] || <TrendingUp className="w-6 h-6" />}
            />
          ))}
        </div>

        <div className="space-y-16">
          {categories.map(([category, items], categoryIndex) => (
            <CategorySection 
              key={category} 
              category={category} 
              items={items} 
              icon={categoryIcons[category] || <TrendingUp className="w-6 h-6" />}
              isReversed={categoryIndex % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzFFNzA0QiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tertarik Mengembangkan Potensi Desa?
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Mari bersama-sama memajukan Desa Sidomulyo melalui pemanfaatan potensi yang ada
              </p>
              <button className="group bg-white text-green-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5" />
                  <span>Hubungi Kami</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function CategoryOverviewCard({ 
  category, 
  count, 
  icon 
}: { 
  category: string; 
  count: number; 
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-800 text-sm mb-1 group-hover:text-green-700 transition-colors duration-300">
        {category}
      </h4>
      <p className="text-2xl font-bold text-green-700">
        {count}
      </p>
      <p className="text-xs text-slate-500">
        Potensi
      </p>
    </div>
  );
}

function CategorySection({ 
  category, 
  items, 
  icon, 
}: { 
  category: string; 
  items: any[]; 
  icon: React.ReactNode;
  isReversed: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 md:p-12 shadow-xl border border-green-100/50">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              {category}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
          </div>
        </div>
        
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
          {items.length} Potensi
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-80 md:w-96">
              <PotentialCard item={item} />
            </div>
          ))}
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/60 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent pointer-events-none"></div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100/50 rounded-full">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          <span className="text-green-700 text-sm font-medium">Geser untuk melihat lebih banyak</span>
        </div>
      </div>
    </div>
  );
}

function PotentialCard({ item }: { item: any }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="font-semibold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
          {item.title}
        </h4>
        
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed flex-1">
          {item.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            Berpotensi
          </span>
          <button className="group/btn text-green-700 hover:text-green-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Selengkapnya →
          </button>
        </div>
        
        <div className="mt-3 w-full bg-slate-200 rounded-full h-0.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-600 to-green-500 w-0 group-hover:w-full transition-all duration-1000 ease-out rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default PotentialSection;