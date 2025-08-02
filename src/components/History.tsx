import { BookOpen, MapPin, Users, Crown, TreePine, Heart } from "lucide-react";

type FounderCardProps = {
  name: string;
  origin: string;
  role: string;
  color: 'green' | 'blue' | 'purple';
};
type DialogBoxProps = {
  speaker: string;
  text: string;
  type: 'question' | 'answer' | 'invitation';
};


const History = () => {
  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Warisan Leluhur</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Sejarah <span className="text-green-700">Desa Keban Agung</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Perjalanan panjang para leluhur dalam membangun fondasi peradaban di tanah Keban Agung
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-green-100/50">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/thumbnails/news-1.png"
                alt="Kondisi Desa Keban Agung"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Asal Mula Pembukaan Desa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p className="text-lg mb-4">
                Desa Keban Agung bermula dari <strong className="text-green-700">Puyang Maharjo</strong> berasal dari Solo (Pulau Jawa), keturunan Keraton Salatiga, yang merantau dengan kesaktiannya ke Pulau Sumatera tepatnya di Desa Keban Agung, dengan membawa istrinya bernama <strong className="text-green-700">Siti Bardiyatun</strong>, penasehatnya bergelar <strong className="text-green-700">Ketib Nabawian</strong>, dan hulubalangnya bergelar <strong className="text-green-700">Pekik Nyaring</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-700 my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 italic">
                    Dalam perjalanannya, singgahlah dia ke <strong>Muara Oal</strong> (di seberang dusun), lokasi tersebut sangat luas dan datar, namun ada tebing sedikit yaitu tebing penghijauan tempat mendirikan pondok/gubuknya, dan di datarannya dibuat perkebunan pada tahun <strong className="text-green-700">1804</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Pertemuan Para Puyang
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <FounderCard 
                name="Puyang Maharjo"
                origin="Solo, Pulau Jawa"
                role="Pemimpin & Imam Dusun"
                color="green"
              />
              <FounderCard 
                name="Puyang Aryo Belkap"
                origin="Desa Lambur"
                role="Hulubalang"
                color="blue"
              />
              <FounderCard 
                name="Puyang Kemarlao"
                origin="Samudra Pasai Melayu"
                role="Penasihat Bahasa"
                color="purple"
              />
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                Setelah beberapa lama tinggal di Muara Oal dengan membuka kebun, menanam kacang-kacangan dan mencari ikan sebagai lauk makan yang ditangkap dengan memakai Bakul sambil mencuci Kacang Hijau, pada suatu hari terlihat ada asap api di ulu Sungai Enim.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Dialog Bersejarah
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="space-y-6">
              <DialogBox 
                speaker="Puyang Maharjo"
                text="Wahai… Siapa Nama Kamu, dan berasal dari mana?"
                type="question"
              />
              <DialogBox 
                speaker="Puyang Aryo Belkap"
                text="Namaku Aryo Belekap, isteriku bernama Melur, dan anakku bernama Aryo Pengikur. Kami berasal dari Desa Lambur."
                type="answer"
              />
              <DialogBox 
                speaker="Puyang Maharjo"
                text="Bagaimana kalau kalian bergabung dengan kami karena di tempat ini sepertinya kurang subur dan airnya deras, sehingga ikannya sedikit."
                type="invitation"
              />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Ujian Pohon Kelapa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
              <p className="text-slate-700 italic text-center">
                "Kalau di antara kita ada yang bisa mencabut pohon kelapa ini maka saya mau ikut, kalau tidak ada lebih baik kita tinggal bersama di sini saja."
              </p>
              <p className="text-green-700 font-semibold text-center mt-2">- Puyang Kemarlao</p>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                Pemilihan pimpinan siapa yang bisa mencabut pohon kelapa dialah yang menjadi pimpinan atau Imam Dusun. Puyang Aryo Belekap mencabut terlebih dahulu namun sama sekali pohon kelapa tidak bergoyang. Akhirnya dapat dicabut dengan mudah oleh <strong className="text-green-700">Puyang Maharjo</strong>.
              </p>
              
              <div className="bg-green-700 text-white rounded-xl p-6 my-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-green-200" />
                  <span className="font-semibold">Kesepakatan Bersejarah</span>
                </div>
                <p className="text-green-100">
                  Pohon kelapa yang dicabut ditanam di pinggir sungai Muara Oal yang berciri-ciri bengkok lima bertanda bekas genggaman tangan Puyang Maharjo. Puyang Kemarlao mengusulkan untuk berbicara sehari-hari memakai bahasa Melayu dan disepakati oleh ketiga Puyang.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Asal Nama Keban Agung
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">KEBAN AGUNG</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-100 mb-2">KEBAN</h4>
                    <p className="text-white">Tempat Berkumpul</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-100 mb-2">AGUNG</h4>
                    <p className="text-white">Besar</p>
                  </div>
                </div>
                <p className="mt-6 text-green-100 text-lg">
                  "Tempat berkumpul orang pembesar"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Warisan yang Berkelanjutan</h3>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Dari tiga Sumbai/keturunan para Puyang, keharmonisan mereka menjadi fondasi yang kuat bagi perkembangan Desa Keban Agung hingga saat ini. Nilai-nilai persatuan, gotong royong, dan kebijaksanaan para leluhur terus dilestarikan oleh generasi penerus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderCard: React.FC<FounderCardProps> = ({ name, origin, role, color }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-700 border-green-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200'
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colorClasses[color]}`}>
        Pendiri
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{name}</h3>
      <p className="text-slate-600 text-sm mb-2">{origin}</p>
      <p className="text-slate-500 text-sm font-medium">{role}</p>
    </div>
  );
};

const DialogBox: React.FC<DialogBoxProps> = ({ speaker, text, type }) => {
  const typeStyles = {
    question: 'border-l-4 border-green-700 bg-green-50',
    answer: 'border-l-4 border-blue-600 bg-blue-50',
    invitation: 'border-l-4 border-purple-600 bg-purple-50'
  };

  return (
    <div className={`rounded-lg p-4 ${typeStyles[type]}`}>
      <h4 className="font-semibold text-slate-800 mb-2">{speaker}:</h4>
      <p className="text-slate-700 italic">"{text}"</p>
    </div>
  );
};


export default History;