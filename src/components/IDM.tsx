import React from 'react';
import { idmScoreData } from '../constants/idmData';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  Award, 
  BarChart3,
  Users,
  DollarSign,
  TreePine,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

const IDM: React.FC = () => {
  const {
    currentYear,
    score,
    status,
    targetStatus,
    minimumTargetScore,
    incrementNeeded,
    scores,
    yearOverYear
  } = idmScoreData;

  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes('mandiri')) return 'from-blue-700 to-blue-600';
    if (status.toLowerCase().includes('maju')) return 'from-white to-white';
    if (status.toLowerCase().includes('berkembang')) return 'from-yellow-600 to-yellow-500';
    return 'from-slate-600 to-slate-500';
  };

  const getTrendIcon = (increment: number) => {
    if (increment > 0) return <ArrowUp className="w-4 h-4 text-white" />;
    if (increment < 0) return <ArrowDown className="w-4 h-4 text-white" />;
    return <Minus className="w-4 h-4 text-slate-600" />;
  };

  const getScorePercentage = (score: number) => Math.min((score / 1) * 100, 100);

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Pengukuran Pembangunan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Indeks Desa <span className="text-green-700">Membangun</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            IDM merupakan indeks komposit yang dibentuk dari tiga indeks: Ketahanan Sosial, Ketahanan Ekonomi, dan Ketahanan Ekologi/Lingkungan
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Main IDM Score */}
          <div className="xl:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Skor IDM {currentYear}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScoreCard 
                  title="Skor IDM"
                  value={score}
                  year={currentYear}
                  isMain={true}
                />
                <StatusCard 
                  status={status}
                  statusColor={getStatusColor(status)}
                />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <TargetCard 
                  targetStatus={targetStatus}
                  minimumScore={minimumTargetScore}
                />
                <IncrementCard 
                  increment={incrementNeeded}
                  trendIcon={getTrendIcon(parseFloat(incrementNeeded))}
                />
              </div>
            </div>
          </div>

          {/* Component Scores */}
          <div className="space-y-6">
            <ComponentScoreCard 
              title="IKS (Sosial)"
              score={scores.iks}
              icon={<Users className="w-5 h-5" />}
              color="from-green-600 to-green-500"
              percentage={getScorePercentage(scores.iks)}
            />
            <ComponentScoreCard 
              title="IKE (Ekonomi)"
              score={scores.ike}
              icon={<DollarSign className="w-5 h-5" />}
              color="from-emerald-600 to-emerald-500"
              percentage={getScorePercentage(scores.ike)}
            />
            <ComponentScoreCard 
              title="IKL (Lingkungan)"
              score={scores.ikl}
              icon={<TreePine className="w-5 h-5" />}
              color="from-green-600 to-green-500"
              percentage={getScorePercentage(scores.ikl)}
            />
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Tren Perkembangan IDM
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
            </div>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Grafik perkembangan skor Indeks Desa Membangun dari tahun ke tahun menunjukkan progres pembangunan desa
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={yearOverYear} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  domain={[0.7, 1]} 
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                />
                <Tooltip 
                  formatter={(value: number) => [value.toFixed(4), 'Skor IDM']}
                  labelStyle={{ color: '#334155' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#15803d" 
                  strokeWidth={3}
                  dot={{ fill: '#15803d', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#16a34a', stroke: '#ffffff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

function ScoreCard({ title, value, year, isMain }: { title: string; value: number; year: number; isMain?: boolean }) {
  return (
    <div className={`${isMain ? 'bg-gradient-to-br from-green-700 to-green-600 text-white' : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200'} rounded-xl p-6 shadow-lg`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 ${isMain ? 'bg-white/20' : 'bg-green-100'} rounded-lg flex items-center justify-center`}>
          <Award className={`w-5 h-5 ${isMain ? 'text-white' : 'text-green-700'}`} />
        </div>
        <span className={`font-semibold ${isMain ? 'text-green-100' : 'text-slate-700'}`}>{title} {year}</span>
      </div>
      <div className={`text-3xl font-bold ${isMain ? 'text-white' : 'text-green-700'}`}>
        {value.toFixed(4)}
      </div>
      <div className={`text-sm mt-2 ${isMain ? 'text-green-100' : 'text-slate-600'}`}>
        Dari skala maksimal 1.0000
      </div>
    </div>
  );
}

function StatusCard({ status, statusColor }: { status: string; statusColor: string }) {
  return (
    <div className={`bg-gradient-to-br ${statusColor} text-green-700 rounded-xl p-6 shadow-lg`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Target className="w-5 h-5 text-green-700" />
        </div>
        <span className="font-semibold text-green-700">Status Desa</span>
      </div>
      <div className="text-2xl font-bold text-green-800 mb-2">
        {status}
      </div>
      <div className="text-sm text-green-700">
        Kategori pembangunan desa
      </div>
    </div>
  );
}

function TargetCard({ targetStatus, minimumScore }: { targetStatus: string; minimumScore: number }) {
  return (
    <div className="bg-gradient-to-br from-white to-white text-green-700 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Target className="w-5 h-5 text-green-700" />
        </div>
        <span className="font-semibold text-green-700">Target Status</span>
      </div>
      <div className="text-xl font-bold text-green-800 mb-1">
        {targetStatus}
      </div>
      <div className="text-sm text-green-700">
        Skor minimal: {minimumScore.toFixed(4)}
      </div>
    </div>
  );
}

function IncrementCard({ increment, trendIcon }: { increment: string; trendIcon: React.ReactNode }) {
  const incrementValue = parseFloat(increment);
  const isPositive = incrementValue > 0;
  
  return (
    <div className={`bg-gradient-to-br ${isPositive ? 'from-green-600 to-green-700' : 'from-slate-600 to-slate-700'} text-white rounded-xl p-6 shadow-lg`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          {trendIcon}
        </div>
        <span className="font-semibold text-white/90">Penambahan Dibutuhkan</span>
      </div>
      <div className="text-xl font-bold text-white mb-1">
        {increment}
      </div>
      <div className="text-sm text-white/80">
        {isPositive ? 'Perlu peningkatan' : 'Target tercapai'}
      </div>
    </div>
  );
}

function ComponentScoreCard({ 
  title, 
  score, 
  icon, 
  color, 
  percentage 
}: { 
  title: string; 
  score: number; 
  icon: React.ReactNode; 
  color: string; 
  percentage: number;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
            <span className="text-white">{icon}</span>
          </div>
          <span className="font-semibold text-slate-800">{title}</span>
        </div>
      </div>
      
      <div className="text-2xl font-bold text-slate-800 mb-3">
        {score.toFixed(4)}
      </div>
      
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="text-xs text-slate-600 mt-2">
        {percentage.toFixed(1)}% dari skor maksimal
      </div>
    </div>
  );
}

export default IDM;