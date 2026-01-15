import React from 'react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="features" className="py-32 bg-card-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brand-900/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">{content.features.heading_small}</h2>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            <span className="text-white">{content.features.heading_main_1}</span> {content.features.heading_main_2} <span className="text-neon-500">{content.features.heading_main_3}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {content.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.items.map((feature, index) => (
            <div key={index} className="bg-rich-black/50 border border-white/5 p-8 rounded-2xl hover:bg-rich-black hover:border-brand-500/30 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
              
              {/* Gradient Border Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/50">
                <feature.icon className="h-7 w-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;