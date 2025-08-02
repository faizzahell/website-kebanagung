import React from 'react';
import { Scale, BookOpen, FileText, Gavel, Building, Users } from 'lucide-react';

interface RegulationItem {
  id: number;
  title: string;
  description: string;
}

interface RegulationCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: RegulationItem[];
}

const regulationData: RegulationCategory[] = [
  {
    id: 'uu',
    title: 'Undang-Undang Republik Indonesia',
    icon: <Scale className="w-6 h-6" />,
    color: 'from-green-700 to-green-600',
    items: [
      {
        id: 1,
        title: 'Undang-Undang Nomor 14 Tahun 2008',
        description: 'tentang Keterbukaan Informasi Publik'
      },
      {
        id: 2,
        title: 'Undang-Undang Nomor 25 Tahun 2009',
        description: 'tentang Pelayanan Publik'
      },
      {
        id: 3,
        title: 'Undang-Undang Nomor 6 Tahun 2014',
        description: 'tentang Desa'
      }
    ]
  },
  {
    id: 'pp',
    title: 'Peraturan Pemerintah',
    icon: <Building className="w-6 h-6" />,
    color: 'from-emerald-700 to-emerald-600',
    items: [
      {
        id: 1,
        title: 'Peraturan Pemerintah Nomor 61 Tahun 2010',
        description: 'Tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik'
      }
    ]
  },
  {
    id: 'pki',
    title: 'Peraturan Komisi Informasi',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-teal-700 to-teal-600',
    items: [
      {
        id: 1,
        title: 'Peraturan Komisi Informasi Pusat RI Nomor 1 Tahun 2010',
        description: 'tentang Standar Layanan Informasi Publik'
      },
      {
        id: 2,
        title: 'Peraturan Komisi Informasi Pusat RI Nomor 1 Tahun 2013',
        description: 'tentang Prosedur Penyelesaian Sengketa Informasi Publik'
      },
      {
        id: 3,
        title: 'Peraturan Komisi Informasi Pusat RI Nomor 1 Tahun 2017',
        description: 'tentang Pengklasifikasian Informasi Publik'
      },
      {
        id: 4,
        title: 'Peraturan Komisi Informasi Pusat RI Nomor 1 Tahun 2018',
        description: 'tentang Standar Layanan Informasi Publik Desa'
      },
      {
        id: 5,
        title: 'Peraturan Komisi Informasi Pusat RI Nomor 1 Tahun 2021',
        description: 'tentang Standar Layanan Informasi Publik'
      }
    ]
  },
  {
    id: 'permendagri',
    title: 'Peraturan Menteri Dalam Negeri',
    icon: <Users className="w-6 h-6" />,
    color: 'from-green-600 to-green-500',
    items: [
      {
        id: 1,
        title: 'Peraturan Pemerintah Nomor 61 Tahun 2010',
        description: 'Tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik'
      }
    ]
  }
];

const Regulation: React.FC = () => {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Dasar Hukum</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Regulasi <span className="text-green-700">PPID</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Landasan hukum dan regulasi yang mengatur penyelenggaraan Pejabat Pengelola Informasi dan Dokumentasi
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Dasar Hukum PPID
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
            </div>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed">
            Regulasi dan peraturan perundang-undangan yang menjadi landasan hukum dalam pelaksanaan 
            keterbukaan informasi publik dan pengelolaan dokumentasi di tingkat desa
          </p>

          <div className="space-y-8">
            {regulationData.map((category) => (
              <RegulationCategory key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard 
            value={regulationData.reduce((acc, cat) => acc + cat.items.length, 0)}
            label="Total Regulasi"
            icon={<BookOpen className="w-5 h-5" />}
          />
          <StatCard 
            value={regulationData.length}
            label="Kategori Hukum"
            icon={<Scale className="w-5 h-5" />}
          />
          <StatCard 
            value="2008-2021"
            label="Periode Regulasi"
            icon={<FileText className="w-5 h-5" />}
          />
          <StatCard 
            value="Aktif"
            label="Status Berlaku"
            icon={<Gavel className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
};

function RegulationCategory({ category }: { category: RegulationCategory }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-md`}>
          <span className="text-white">{category.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
            {category.title}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-1 group-hover:w-20 transition-all duration-300"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-0 lg:ml-14">
        {category.items.map((item) => (
          <RegulationItem key={item.id} item={item} categoryColor={category.color} />
        ))}
      </div>
    </div>
  );
}

function RegulationItem({ item, categoryColor }: { item: RegulationItem; categoryColor: string }) {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:scale-[1.02]">
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-700 transition-colors duration-300">
            <div className="w-2 h-2 bg-green-700 rounded-full group-hover:bg-white transition-colors duration-300"></div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-300 leading-tight">
              {item.title}
            </h4>
          </div>
        </div>
        
        <p className="text-sm text-slate-600 leading-relaxed ml-9">
          {item.description}
        </p>
      </div>

      {/* Progress bar decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${categoryColor} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
      </div>
    </div>
  );
}

function StatCard({ 
  value, 
  label, 
  icon 
}: { 
  value: string | number; 
  label: string; 
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-green-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
          <span className="text-green-700 group-hover:text-white transition-colors duration-300">
            {icon}
          </span>
        </div>
      </div>
      <div className="text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
        {value}
      </div>
      <div className="text-sm text-slate-600 font-medium">
        {label}
      </div>
    </div>
  );
}

export default Regulation;