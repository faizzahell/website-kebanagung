"use client";
import { useRef } from "react";
import { structureOrganizatin } from "../constants/structureOrganization";
import { ChevronLeft, ChevronRight, FileText, Users, Crown, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CarouselStructure = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <Crown className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Struktur Organisasi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Kepengurusan <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Struktur Organisasi dan Tata Kerja Desa Keban Agung yang profesional, berpengalaman, dan berdedikasi tinggi
          </p>
        </div>

        <div className="hidden md:block relative mb-8">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-green-100/50 rounded-full p-3 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-5 h-5 text-green-700 group-hover:text-green-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-green-100/50 rounded-full p-3 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-5 h-5 text-green-700 group-hover:text-green-800" />
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-green-100/50 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Tim Pengurus Desa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm hidden sm:block">
              {structureOrganizatin.length} Pengurus
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {structureOrganizatin.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-72 md:w-80">
                  <div className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100/50 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {getRoleIcon(item.role)}
                        <span className="ml-1">{getRoleTitle(item.role)}</span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br from-green-100 to-green-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium mb-1">Klik untuk detail</p>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span className="text-xs">Profil Lengkap</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                          <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-slate-500">Pengalaman</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? 'bg-green-700' : 'bg-slate-200'
                              } group-hover:bg-green-700 transition-colors duration-300`}
                              style={{ transitionDelay: `${i * 100}ms` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-700 via-green-500 to-green-400 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-green-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent pointer-events-none"></div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100/50 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">Geser untuk melihat semua pengurus</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700 mb-1">1</div>
            <div className="text-sm text-slate-600">Kepala Desa</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700 mb-1">{structureOrganizatin.length - 1}</div>
            <div className="text-sm text-slate-600">Staff</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700 mb-1">24/7</div>
            <div className="text-sm text-slate-600">Pelayanan</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700 mb-1">100+</div>
            <div className="text-sm text-slate-600">Layanan</div>
          </div>
        </div>

        <div className="text-right">
          <Link
            to="/struktur-desa"
            className="inline-block group"
          >
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Lihat struktur lebih lengkap</span>
              <div className="w-0 group-hover:w-2 h-2 bg-white/30 rounded-full transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const getRoleIcon = (role: string) => {
  if (role.toLowerCase().includes('kepala')) return '👑';
  if (role.toLowerCase().includes('sekretaris')) return '📋';
  if (role.toLowerCase().includes('bendahara')) return '💰';
  if (role.toLowerCase().includes('kaur')) return '📊';
  if (role.toLowerCase().includes('kasi')) return '🏛️';
  return '👤';
};

const getRoleTitle = (role: string) => {
  if (role.length > 15) {
    return role.substring(0, 12) + '...';
  }
  return role;
};

export default CarouselStructure;