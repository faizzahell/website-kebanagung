/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  letakDanLuasWilayah,
  batasWilayah,
  asetDesa,
} from "../constants/geographical";
import { 
  MapPin, 
  Navigation, 
  Building2, 
  TreePine,
  Mountain,
  Compass,
  Map,
  Home,
  Package
} from 'lucide-react';

const Geographical = () => {
  const totalLuas = letakDanLuasWilayah.reduce((total, item) => {
    const luasParsed = parseFloat(item.luas.replace(/[^\d.,]/g, '').replace(',', '.'));
    return total + (isNaN(luasParsed) ? 0 : luasParsed);
  }, 0);

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Profil Wilayah</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Geografis <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Informasi lengkap mengenai letak geografis, batas wilayah, dan aset desa dalam sistem informasi terintegrasi
          </p>
        </div>

        <div className="space-y-12">
          {/* Letak dan Luas Wilayah */}
          <LocationSection totalLuas={totalLuas} />
          
          {/* Batas Wilayah */}
          <BoundarySection />
          
          {/* Aset Desa */}
          <AssetSection />
        </div>
      </div>
    </section>
  );
};

function LocationSection({ totalLuas }: { totalLuas: number }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
          <Map className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Letak dan Luas Wilayah
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <p className="text-slate-700 leading-relaxed text-justify">
              Desa Keban Agung merupakan salah satu dari 4 desa dan 3 kelurahan di wilayah Kecamatan Lawang Kidul, 
              yang terletak sebagai Ibu Kota Kecamatan Lawang Kidul karena Kantor Kecamatan Lawang Kidul berada di 
              wilayah Desa Keban Agung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {letakDanLuasWilayah.map((item, idx) => (
              <LandAreaCard key={idx} item={item} />
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-3">
              <Mountain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-slate-700 leading-relaxed text-justify text-sm">
                Dari data di atas, luas tanah lahan hanyalah perkiraan karena belum diukur secara akurat. 
                Keadaan topografi Desa Keban Agung secara umum merupakan dataran rendah dan tidak berbukit-bukit, 
                dialiri oleh sungai serta beriklim tropis. Hal tersebut mempengaruhi pola perekonomian penduduk setempat.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <TreePine className="w-5 h-5" />
              </div>
              <span className="font-semibold">Total Luas Wilayah</span>
            </div>
            <div className="text-3xl font-bold mb-2">
              {totalLuas.toFixed(2)} Ha
            </div>
            <div className="text-green-100 text-sm">
              Estimasi luas keseluruhan
            </div>
          </div>

          <TopographyCard />
        </div>
      </div>
    </div>
  );
}

function BoundarySection() {
  const boundaries = [
    { direction: 'Utara', value: batasWilayah.utara, icon: <Navigation className="w-4 h-4" />, color: 'bg-blue-100 text-blue-700' },
    { direction: 'Selatan', value: batasWilayah.selatan, icon: <Navigation className="w-4 h-4 rotate-180" />, color: 'bg-orange-100 text-orange-700' },
    { direction: 'Barat', value: batasWilayah.barat, icon: <Navigation className="w-4 h-4 -rotate-90" />, color: 'bg-purple-100 text-purple-700' },
    { direction: 'Timur', value: batasWilayah.timur, icon: <Navigation className="w-4 h-4 rotate-90" />, color: 'bg-emerald-100 text-emerald-700' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
          <Compass className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Batas Wilayah
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {boundaries.map((boundary, idx) => (
          <BoundaryCard key={idx} boundary={boundary} />
        ))}
      </div>
    </div>
  );
}

function AssetSection() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Aset Desa / Kekayaan Desa
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
        </div>
      </div>

      <p className="text-slate-600 mb-8 leading-relaxed">
        Inventarisasi lengkap aset dan kekayaan desa yang dikelola untuk kesejahteraan masyarakat
      </p>

      <div className="overflow-hidden rounded-xl border border-green-100">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-green-700 to-green-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Jenis Aset</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Volume</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Kondisi</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Lokasi / Tempat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100">
              {asetDesa.map((item, idx) => (
                <AssetRow key={idx} item={item} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
        <div className="flex items-center gap-2 text-green-700">
          <Package className="w-4 h-4" />
          <span className="font-medium text-sm">
            Total {asetDesa.length} item aset desa terdaftar dan terkelola dengan baik
          </span>
        </div>
      </div>
    </div>
  );
}

function LandAreaCard({ item }: { item: { nama: string; luas: string } }) {
  return (
    <div className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-green-200 transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-200">
            {item.nama}
          </h4>
          <p className="text-2xl font-bold text-green-700 mt-1">
            {item.luas}
          </p>
        </div>
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors duration-200">
          <TreePine className="w-5 h-5 text-green-700 group-hover:text-white transition-colors duration-200" />
        </div>
      </div>
      
      <div className="mt-4 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-700 to-green-500 w-3/4 group-hover:w-full transition-all duration-300"></div>
      </div>
    </div>
  );
}

function BoundaryCard({ boundary }: { boundary: { direction: string; value: string; icon: React.ReactNode; color: string } }) {
  return (
    <div className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-green-200 transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 ${boundary.color} rounded-lg flex items-center justify-center`}>
          {boundary.icon}
        </div>
        <h4 className="font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-200">
          {boundary.direction}
        </h4>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        {boundary.value}
      </p>
      
      <div className="mt-4 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-700 to-green-500 w-2/3 group-hover:w-full transition-all duration-300"></div>
      </div>
    </div>
  );
}

function TopographyCard() {
  return (
    <div className="bg-gradient-to-br from-white to-white rounded-xl p-6 text-green-700 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Mountain className="w-5 h-5" />
        </div>
        <span className="font-semibold">Topografi</span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-green-700">Bentuk:</span>
          <span className="font-medium">Dataran Rendah</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-700">Iklim:</span>
          <span className="font-medium">Tropis</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-700">Sungai:</span>
          <span className="font-medium">Ada</span>
        </div>
      </div>
    </div>
  );
}

function AssetRow({ item, index }: { item: any; index: number }) {
  const getConditionColor = (kondisi: string) => {
    if (kondisi.toLowerCase().includes('baik')) return 'bg-green-100 text-green-800';
    if (kondisi.toLowerCase().includes('rusak')) return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <tr className="hover:bg-green-50/30 transition-colors duration-200">
      <td className="px-6 py-4">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="text-green-700 font-semibold text-sm">{index + 1}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Home className="w-4 h-4 text-slate-500" />
          <span className="font-medium text-slate-800">{item.jenis}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-slate-700 font-medium">{item.volume}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(item.kondisi)}`}>
          {item.kondisi}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-slate-500" />
          <span className="text-slate-700">{item.lokasi}</span>
        </div>
      </td>
    </tr>
  );
}

export default Geographical;