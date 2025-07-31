import { Quote, Heart, Globe, Users, Award } from "lucide-react";

const Welcome = () => {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Sambutan Kepala Desa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Selamat Datang di <span className="text-green-700">Desa Keban Agung</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Menuju transformasi digital untuk mewujudkan desa mandiri dan berkelanjutan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-green-100/50 w-full">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-green-700/20 shadow-2xl mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-50">
                    <img
                      src="/profile.png"
                      alt="Foto Kepala Desa"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  Fajrol Bahri, S.M.
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                    Kepala Desa Keban Agung
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <p className="text-xs text-slate-500">Melayani</p>
                    <p className="font-bold text-green-700">Masyarakat</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-5 h-5 text-green-700" />
                    </div>
                    <p className="text-xs text-slate-500">Visi</p>
                    <p className="font-bold text-green-700">Go Global</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-5 h-5 text-green-700" />
                    </div>
                    <p className="text-xs text-slate-500">Komitmen</p>
                    <p className="font-bold text-green-700">Mandiri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Pesan Kepala Desa
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 text-green-700/20">
                  <Quote className="w-full h-full" />
                </div>
                
                <div className="pl-12 pr-4">
                  <p className="text-slate-700 leading-relaxed text-justify mb-6">
                    Website Desa Keban Agung ini merupakan wujud pemanfaatan teknologi tepat guna menuju{" "}
                    <span className="font-semibold text-green-700 bg-green-100/50 px-2 py-1 rounded">
                      Desa Mandiri & Go Global
                    </span>. 
                    Melalui platform ini, warga dapat dengan mudah mengakses informasi terkini mengenai program pemerintah, 
                    berpartisipasi dalam pengambilan keputusan, serta mempromosikan potensi lokal seperti pertanian dan pariwisata.
                  </p>
                  
                  <p className="text-slate-700 leading-relaxed text-justify">
                    Inisiatif ini tidak hanya membangun{" "}
                    <span className="font-semibold text-green-700 bg-green-100/50 px-2 py-1 rounded">
                      transparansi
                    </span>, tetapi juga memperkuat keterlibatan masyarakat dalam 
                    pembangunan desa secara inklusif dan berkelanjutan.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-6 h-6 text-green-700/20 rotate-180">
                  <Quote className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group bg-gradient-to-br from-green-700 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">Desa Mandiri</h4>
                </div>
                <p className="text-green-100 text-sm leading-relaxed">
                  Membangun kemandirian ekonomi dan sosial masyarakat desa melalui inovasi dan teknologi
                </p>
                <div className="mt-4 w-full bg-green-800/30 rounded-full h-1 overflow-hidden">
                  <div className="h-full bg-white/50 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">Go Global</h4>
                </div>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Membawa potensi desa ke kancah internasional dengan tetap mempertahankan nilai-nilai lokal
                </p>
                <div className="mt-4 w-full bg-emerald-800/30 rounded-full h-1 overflow-hidden">
                  <div className="h-full bg-white/50 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;