import { MapPin, Navigation, Globe, Compass, ExternalLink, Phone, Mail } from 'lucide-react';

const MapEmbed = () => {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">Lokasi Geografis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Peta <span className="text-green-700">Wilayah</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Lokasi geografis Desa Keban Agung, Kecamatan Lawang Kidul, Kabupaten Muara Enim, Sumatera Selatan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-green-100/50 hover:shadow-3xl transition-all duration-500">
              <div className="p-6 bg-gradient-to-r from-green-700 to-green-600 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Desa Keban Agung</h3>
                      <p className="text-green-100 text-sm">Interactive Map View</p>
                    </div>
                  </div>
                  <button className="group/btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka di Google Maps</span>
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="w-full h-[500px] md:h-[850px] transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159575.73853667543!2d103.75823542684543!3d-3.788514043456868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e39f20b8b7855c9%3A0x643580cafaf535b6!2sKeban%20Agung%2C%20Kec.%20Lawang%20Kidul%2C%20Kabupaten%20Muara%20Enim%2C%20Sumatera%20Selatan!5e1!3m2!1sid!2sid!4v1753844529899!5m2!1sid!2sid"
                    className="w-full h-full border-0 group-hover:scale-[1.01] transition-transform duration-700"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Desa Keban Agung"
                  ></iframe>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center opacity-0 pointer-events-none">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-700 rounded-full animate-pulse mb-4 mx-auto"></div>
                    <p className="text-green-700 font-medium">Loading Map...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Informasi Lokasi</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-1"></div>
                </div>
              </div>

              <div className="space-y-4">
                <LocationInfoItem 
                  icon={<MapPin className="w-4 h-4" />}
                  label="Desa"
                  value="Keban Agung"
                />
                <LocationInfoItem 
                  icon={<Navigation className="w-4 h-4" />}
                  label="Kecamatan"
                  value="Lawang Kidul"
                />
                <LocationInfoItem 
                  icon={<Globe className="w-4 h-4" />}
                  label="Kabupaten"
                  value="Muara Enim"
                />
                <LocationInfoItem 
                  icon={<Compass className="w-4 h-4" />}
                  label="Provinsi"
                  value="Sumatera Selatan"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Hubungi Kami</h3>
                  <p className="text-green-100 text-sm">Informasi & Bantuan</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Phone className="w-4 h-4 text-green-200" />
                  <div>
                    <p className="text-sm text-green-100">Telepon</p>
                    <p className="font-semibold">+62 xxx-xxxx-xxxx</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Mail className="w-4 h-4 text-green-200" />
                  <div>
                    <p className="text-sm text-green-100">Email</p>
                    <p className="font-semibold">desa@kebanagung.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Navigasi</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Petunjuk Arah
                </button>
                <button className="w-full border-2 border-green-200 text-green-700 py-3 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Street View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            icon={<MapPin className="w-6 h-6" />}
            value="1"
            label="Desa"
            description="Wilayah Administratif"
            color="green"
          />
          <StatCard 
            icon={<Globe className="w-6 h-6" />}
            value="5"
            label="Dusun"
            description="Pembagian Wilayah"
            color="green"
          />
          <StatCard 
            icon={<Navigation className="w-6 h-6" />}
            value="15"
            label="RT/RW"
            description="Rukun Tetangga"
            color="green"
          />
          <StatCard 
            icon={<Compass className="w-6 h-6" />}
            value="2.5"
            label="Km²"
            description="Luas Wilayah"
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

function LocationInfoItem({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors duration-200">
      <div className="text-green-700">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function StatCard({ 
  icon, 
  value, 
  label, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  value: string; 
  label: string; 
  description: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
}) {
  const colorClasses = {
    green: 'from-green-700 to-green-600',
    blue: 'from-blue-700 to-blue-600',
    purple: 'from-purple-700 to-purple-600',
    orange: 'from-orange-700 to-orange-600',
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
            {value}
          </div>
          <div className="text-sm font-semibold text-slate-700 mb-1">
            {label}
          </div>
          <div className="text-xs text-slate-500">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapEmbed;