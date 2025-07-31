import { Link } from "react-router-dom";
import { populationData, apbDesaData } from "../constants/populationApbData";
import {
  Users,
  User,
  Home,
  UserPlus,
  Shuffle,
  FileText
} from "lucide-react";


const formatNumber = (num: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(num);
};

export default function PopulationApbSection() {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Data Terkini</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Dashboard <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparansi data kependudukan dan keuangan desa dalam satu platform terintegrasi
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Administrasi Penduduk
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait
                dengan kependudukan dan pendayagunaannya untuk pelayanan publik yang efektif dan efisien
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <PopulationCard 
                  value={populationData.total} 
                  label="Total Penduduk" 
                  icon={<Users className="w-6 h-6 text-primary" />} 
                  highlight={true}
                />
                <PopulationCard 
                  value={populationData.male} 
                  label="Laki-Laki" 
                  icon={<User className="w-6 h-6 text-blue-600" />} 
                />
                <PopulationCard 
                  value={populationData.headOfFamily} 
                  label="Kepala Keluarga" 
                  icon={<Home className="w-6 h-6 text-yellow-600" />} 
                />
                <PopulationCard 
                  value={populationData.female} 
                  label="Perempuan" 
                  icon={<User className="w-6 h-6 text-pink-500" />} 
                />
                <PopulationCard 
                  value={populationData.temporaryResidents} 
                  label="Penduduk Sementara" 
                  icon={<UserPlus className="w-6 h-6 text-green-600" />} 
                />
                <PopulationCard 
                  value={populationData.migration} 
                  label="Mutasi Penduduk" 
                  icon={<Shuffle className="w-6 h-6 text-purple-600" />} 
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    APB DESA {apbDesaData.year}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Akses cepat dan transparan terhadap APB Desa Keban Agung serta proyek pembangunan
              </p>
              
              <div className="space-y-6">
                <ApbCard 
                  title="Pendapatan Desa" 
                  amount={formatNumber(apbDesaData.income)}
                  type="income"
                />
                <ApbCard 
                  title="Belanja Desa" 
                  amount={formatNumber(apbDesaData.expense)}
                  type="expense"
                />
                
                <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-green-700 to-green-600 rounded-xl text-white shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Selisih Anggaran</h3>
                      <p className="text-green-100 text-sm sm:text-base">Pendapatan - Belanja</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold">
                        {formatNumber(apbDesaData.income - apbDesaData.expense)}
                      </div>
                      <div className="text-green-100 text-sm sm:text-base">
                        {apbDesaData.income > apbDesaData.expense ? 'Surplus' : 'Defisit'}
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-8">
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
}

function PopulationCard({ 
  value, 
  label, 
  icon, 
  highlight = false 
}: { 
  value: number; 
  label: string; 
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className={`
      group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg
      ${highlight 
        ? 'bg-gradient-to-br from-green-700 to-green-600 text-white shadow-lg' 
        : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-green-200'
      }
    `}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        {highlight && (
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
        )}
      </div>
      <div className={`text-2xl font-bold mb-1 ${highlight ? 'text-white' : 'text-slate-800'}`}>
        {value.toLocaleString("id-ID")}
      </div>
      <div className={`text-sm font-medium ${highlight ? 'text-green-100' : 'text-slate-600'}`}>
        {label}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
}

function ApbCard({ 
  title, 
  amount, 
  type 
}: { 
  title: string; 
  amount: string; 
  type: 'income' | 'expense';
}) {
  const isIncome = type === 'income';
  
  return (
    <div className="group bg-gradient-to-r from-white to-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${isIncome 
              ? 'bg-green-100 text-green-700' 
              : 'bg-orange-100 text-orange-700'
            }
          `}>
            {isIncome ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            )}
          </div>
          <h3 className="text-slate-700 font-semibold">{title}</h3>
        </div>
        <div className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${isIncome 
            ? 'bg-green-100 text-green-700' 
            : 'bg-orange-100 text-orange-700'
          }
        `}>
          {isIncome ? 'Masuk' : 'Keluar'}
        </div>
      </div>
      
      <div className="text-2xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
        {amount}
      </div>
      
      <div className="mt-4 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
        <div className={`
          h-full rounded-full transition-all duration-1000 group-hover:w-full
          ${isIncome 
            ? 'bg-gradient-to-r from-green-600 to-green-500 w-3/4' 
            : 'bg-gradient-to-r from-orange-600 to-orange-500 w-2/3'
          }
        `}></div>
      </div>
    </div>
  );
}