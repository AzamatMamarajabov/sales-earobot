import React from 'react';
import { useLanguage } from '../LanguageContext';

const StatsBar: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up [animation-delay:1000ms]">
      <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
        
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-white/10 relative z-10">
          {content.stats.map((stat, index) => {
            let valueColor = "text-white";
            let glowEffect = "";
            
            if (index === 3) { // Withdrawals
                valueColor = "text-gold-400";
                glowEffect = "drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]";
            }
            if (index === 0 || index === 1) { // Gains
                valueColor = "text-neon-400";
                glowEffect = "drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]";
            }

            return (
              <div key={index} className={`flex flex-col items-center justify-center text-center p-2 ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  {stat.label}
                </p>
                <p className={`text-2xl md:text-4xl font-black ${valueColor} ${glowEffect} tracking-tight`}>
                  {stat.value}
                </p>
                {stat.subtext && (
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold mt-3 uppercase tracking-wide border ${index === 2 ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-brand-500/10 border-brand-500/20 text-brand-400'}`}>
                    {stat.subtext}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;