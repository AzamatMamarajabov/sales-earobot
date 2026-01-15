import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink, TrendingUp, Wallet, Check, Circle } from 'lucide-react';
import { CHART_DATA, LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const ProofSection: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="proof" className="py-32 bg-rich-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 text-gold-500 font-bold mb-6">
              <span className="flex h-3 w-3 relative mr-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
              </span>
              <span className="uppercase tracking-[0.2em] text-xs">{content.proof.badge}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
              {content.proof.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-teal-400">{content.proof.subtitle}</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
              {content.proof.description}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center bg-card-dark/50 p-5 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/20 group-hover:scale-110 transition-transform">
                    <Wallet className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">{content.proof.card_withdraw_title}</h3>
                  <p className="text-gray-400 mt-1 text-sm font-medium leading-snug">
                     {content.proof.card_withdraw_desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-card-dark/50 p-5 rounded-2xl border border-white/5 hover:border-neon-500/30 transition-colors group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-neon-500/10 text-neon-500 border border-neon-500/20 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-400 transition-colors">{content.proof.card_return_title}</h3>
                  <p className="text-gray-400 mt-1 text-sm font-medium leading-snug">
                    {content.proof.card_return_desc}
                  </p>
                </div>
              </div>
            </div>

            <a 
              href={LINKS.MYFXBOOK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/20 hover:border-brand-500/40 font-bold transition-all group"
            >
              {content.proof.link_text} <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Chart (Terminal Look) */}
          <div className="order-1 lg:order-2 bg-[#0f172a] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden ring-1 ring-white/5 animate-float">
            {/* Window Controls */}
            <div className="bg-slate-800/80 border-b border-white/5 px-4 py-3 flex justify-between items-center backdrop-blur-sm">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-gray-500">REAL_ACCOUNT_MONITOR.EXE</div>
            </div>
            
            <div className="p-6 md:p-8 relative">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <p className="text-xs text-gray-400 font-mono mb-1">TOTAL_GAIN</p>
                        <p className="text-4xl font-mono font-bold text-white tracking-tighter">+145.41<span className="text-lg text-gray-500">%</span></p>
                    </div>
                    <div className="flex items-center px-3 py-1 bg-neon-500/10 rounded border border-neon-500/20">
                        <span className="w-2 h-2 bg-neon-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-[10px] font-mono font-bold text-neon-500 uppercase">ONLINE</span>
                    </div>
                </div>
                
                <div className="h-64 md:h-80 w-full relative">
                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 border-b border-white/5 pointer-events-none" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)' }}></div>
                    
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={CHART_DATA}>
                        <defs>
                            <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} opacity={0.5} />
                        <XAxis 
                            dataKey="month" 
                            stroke="#475569" 
                            tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} 
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                        />
                        <YAxis 
                            stroke="#475569" 
                            tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} 
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}%`}
                            dx={-10}
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#020617', borderColor: '#334155', color: '#fff', borderRadius: '4px', fontFamily: 'monospace' }}
                            itemStyle={{ color: '#4ade80' }}
                            cursor={{ stroke: '#475569', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="gain" 
                            stroke="#22c55e" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorGain)" 
                            activeDot={{ r: 6, fill: "#fff", stroke: "#22c55e", strokeWidth: 2 }}
                        />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-6 flex justify-between text-[10px] font-mono text-gray-600 border-t border-white/5 pt-4">
                    <span>SOURCE: MYFXBOOK_API_V2</span>
                    <span>LAST_UPDATE: {new Date().toLocaleDateString()}</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProofSection;