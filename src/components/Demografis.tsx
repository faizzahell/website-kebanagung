import {
  pendudukByGender,
  pendudukByDusun,
  mutasiPenduduk,
  strukturPenduduk,
  pendidikanPenduduk,
  mataPencarian,
  kepemilikanTernak,
  luasWilayah,
} from "../constants/demografi";

import { 
  Users, 
  User, 
  Home, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Building2,
  PieChart,
  BarChart3,
  TrendingUp
} from "lucide-react";

type StatCardProps = {
  icon: React.ElementType;
  label: string;
  value: number;
  color: 'blue' | 'pink' | 'yellow' | 'green';
  highlight?: boolean;
};

// SocialCard Props Type
type SocialCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'orange';
};

const Demografis = () => {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Data Statistik</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Demografi <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Analisis komprehensif data kependudukan, sosial, ekonomi, dan pemerintahan Desa Keban Agung
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Kependudukan
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Jumlah Penduduk Desa Keban Agung <strong className="text-green-700">{pendudukByGender.total.toLocaleString("id-ID")}</strong> Jiwa,
              dengan <strong className="text-green-700">{pendudukByGender.totalKK.toLocaleString("id-ID")}</strong> Kepala Keluarga. Aspek penting
              meliputi perkembangan jumlah penduduk, kepadatan, persebaran, dan strukturnya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                icon={User}
                label="Laki-laki"
                value={pendudukByGender.male}
                color="blue"
              />
              <StatCard 
                icon={User}
                label="Perempuan"
                value={pendudukByGender.female}
                color="pink"
              />
              <StatCard 
                icon={Home}
                label="Kepala Keluarga"
                value={pendudukByGender.totalKK}
                color="yellow"
                highlight={true}
              />
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" />
                Distribusi Penduduk per Dusun
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
                  <thead>
                    <tr className="bg-green-50 border-b border-green-100">
                      <th className="px-4 py-3 text-left text-green-700 font-semibold">Dusun</th>
                      <th className="px-4 py-3 text-center text-green-700 font-semibold">Laki-laki</th>
                      <th className="px-4 py-3 text-center text-green-700 font-semibold">Perempuan</th>
                      <th className="px-4 py-3 text-center text-green-700 font-semibold">Total</th>
                      <th className="px-4 py-3 text-center text-green-700 font-semibold">KK</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendudukByDusun.data.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-800">{row.dusun}</td>
                        <td className="px-4 py-3 text-center text-slate-600">{row.male.toLocaleString("id-ID")}</td>
                        <td className="px-4 py-3 text-center text-slate-600">{row.female.toLocaleString("id-ID")}</td>
                        <td className="px-4 py-3 text-center font-semibold text-slate-800">{row.total.toLocaleString("id-ID")}</td>
                        <td className="px-4 py-3 text-center text-green-700 font-medium">
                          {Object.values(pendudukByDusun.kk)[idx]} KK
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-700" />
                Mutasi Penduduk
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mutasiPenduduk.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h5 className="font-semibold text-slate-800 mb-2">{item.jenis}</h5>
                    <div className="text-2xl font-bold text-green-700 mb-1">{item.jumlah}</div>
                    <div className="text-xs text-slate-500">
                      L: {item.male} | P: {item.female}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Struktur Penduduk Menurut Kelompok Umur
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
                <thead>
                  <tr className="bg-green-50 border-b border-green-100">
                    <th className="px-4 py-3 text-left text-green-700 font-semibold">Kelompok Umur</th>
                    <th className="px-4 py-3 text-center text-green-700 font-semibold">Laki-laki</th>
                    <th className="px-4 py-3 text-center text-green-700 font-semibold">Perempuan</th>
                    <th className="px-4 py-3 text-center text-green-700 font-semibold">Total</th>
                    <th className="px-4 py-3 text-center text-green-700 font-semibold">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {strukturPenduduk.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-800">{row.umur}</td>
                      <td className="px-4 py-3 text-center text-slate-600">{row.male.toLocaleString("id-ID")}</td>
                      <td className="px-4 py-3 text-center text-slate-600">{row.female.toLocaleString("id-ID")}</td>
                      <td className="px-4 py-3 text-center font-semibold text-slate-800">{row.total.toLocaleString("id-ID")}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full"
                              style={{ width: `${(row.total / pendudukByGender.total) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600">
                            {((row.total / pendudukByGender.total) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Tingkat Pendidikan
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pendidikanPenduduk.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 text-center">
                  <div className="text-2xl font-bold text-green-700 mb-2">{item.jumlah}</div>
                  <div className="text-sm font-medium text-slate-700">{item.pendidikan}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Keadaan Sosial
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <SocialCard 
                title="Sumber Daya Manusia"
                description="SDM Desa Keban Agung cukup baik dan akan lebih baik ke depannya."
                icon={Users}
                color="blue"
              />
              <SocialCard 
                title="Kehidupan Beragama"
                description="95% beragama Islam, dan ibadah dijalankan dengan baik."
                icon={Heart}
                color="green"
              />
              <SocialCard 
                title="Budaya"
                description="Budaya dan adat istiadat dijaga dan dilestarikan oleh Lembaga Adat."
                icon={Building2}
                color="purple"
              />
              <SocialCard 
                title="Politik"
                description="Partisipasi demokrasi tinggi, dengan masyarakat aktif dalam pemilu."
                icon={PieChart}
                color="orange"
              />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Keadaan Ekonomi
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Mata Pencarian Penduduk</h4>
                <div className="space-y-3">
                  {mataPencarian.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-lg hover:shadow-sm transition-all">
                      <span className="text-slate-700 font-medium">{item.nama}</span>
                      <span className="text-green-700 font-bold">{item.jumlah.toLocaleString("id-ID")}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0V3a2 2 0 012-2h10a2 2 0 012 2v11z" />
                  </svg>
                  Kepemilikan Ternak
                </h4>
                <div className="space-y-3">
                  {Object.entries(kepemilikanTernak).map(([jenis, jumlah]) => (
                    <div key={jenis} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-lg hover:shadow-sm transition-all">
                      <span className="text-slate-700 font-medium capitalize">{jenis}</span>
                      <span className="text-green-700 font-bold">{jumlah.toLocaleString("id-ID")} ekor</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Kondisi Pemerintahan Desa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-700" />
              Pembagian Wilayah Desa
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(luasWilayah).map(([dusun, luas]) => (
                <div key={dusun} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                  <h5 className="text-lg font-bold text-slate-800 mb-2">Dusun {dusun}</h5>
                  <div className="text-3xl font-bold text-green-700 mb-1">{luas}</div>
                  <div className="text-sm text-slate-600">Hektare</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-700 to-green-600 rounded-xl text-white shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Total Luas Wilayah</h3>
                <div className="text-3xl font-bold">
                  {Object.values(luasWilayah).reduce((total, luas) => total + luas, 0).toLocaleString("id-ID")} Ha
                </div>
                <p className="text-green-100 mt-2">Luas keseluruhan Desa Keban Agung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color, highlight = false }) => {
  const colorClasses = {
    blue: 'text-blue-600',
    pink: 'text-pink-500',
    yellow: 'text-yellow-600',
    green: 'text-green-600'
  };

  return (
    <div className={`
      group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg
      ${highlight 
        ? 'bg-gradient-to-br from-green-700 to-green-600 text-white shadow-lg' 
        : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-green-200'
      }
    `}>
      <div className="flex items-start justify-between mb-3">
        <span className={`text-2xl ${colorClasses[color]}`}>
          <Icon />
        </span>
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
    </div>
  );
};

const SocialCard: React.FC<SocialCardProps> = ({ title, description, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    orange: 'bg-orange-100 text-orange-700'
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          <Icon />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-slate-800 mb-2">{title}</h4>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Demografis;
