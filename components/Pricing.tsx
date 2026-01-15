import React from 'react';
import { Check, Star, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { LINKS } from '../constants';

const Pricing: React.FC = () => {
  const { content } = useLanguage();
  const { tier } = content.pricing;

  const handleBuyClick = () => {
    window.open(LINKS.TELEGRAM, '_blank');
  };

  return (
    <section id="pricing" className="py-32 bg-rich-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{content.pricing.heading_main} <span className="text-gold-gradient">{content.pricing.heading_highlight}</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{content.pricing.subheading}</p>
        </div>

        <div className="max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-black rounded-[2rem] border border-gold-500/40 shadow-[0_0_60px_rgba(245,158,11,0.15)] overflow-hidden relative group">
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {tier.popular && (
              <div className="absolute top-0 right-0 z-20">
                  <div className="bg-gold-500 text-black text-[10px] font-black px-4 py-2 rounded-bl-2xl uppercase tracking-widest flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-black" /> {content.language === 'ru' ? 'ЛУЧШИЙ ВЫБОР' : 'ENG FOYDALI'}
                  </div>
              </div>
            )}

            <div className="p-10 text-center border-b border-white/10 bg-white/[0.02]">
              <div className="flex justify-center mb-4">
                 <div className="bg-gold-500/20 p-3 rounded-full border border-gold-500/30">
                     <Sparkles className="w-6 h-6 text-gold-500" />
                 </div>
              </div>
              <h3 className="text-lg font-bold text-gold-400 uppercase tracking-[0.2em] mb-2">{tier.name}</h3>
              <div className="mt-6 flex items-baseline justify-center text-white">
                <span className="text-6xl font-black tracking-tighter shadow-gold-500/50 drop-shadow-lg">${tier.price}</span>
                <span className="ml-2 text-lg font-medium text-gray-500">/ {content.language === 'ru' ? 'навсегда' : 'bir marta'}</span>
              </div>
            </div>

            <div className="px-10 py-10 bg-black/40">
              <ul className="space-y-5 mb-10">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full p-1 mt-0.5 shadow-lg shadow-gold-500/20">
                      <Check className="h-3 w-3 text-black stroke-[3px]" />
                    </div>
                    <p className="ml-4 text-base text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="relative group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg blur opacity-40 group-hover/btn:opacity-75 transition duration-200"></div>
                <Button onClick={handleBuyClick} fullWidth variant="gold" className="relative py-4 text-lg font-black tracking-wide uppercase">
                  {tier.cta}
                </Button>
              </div>
              
              <div className="mt-8 flex justify-center space-x-6 grayscale opacity-30 hover:opacity-50 transition-opacity">
                 {/* Placeholder icons for payments - visualized with CSS only to avoid imports */}
                 <div className="h-8 w-12 border-2 border-white/50 rounded flex items-center justify-center font-mono text-[8px] text-white">VISA</div>
                 <div className="h-8 w-12 border-2 border-white/50 rounded flex items-center justify-center font-mono text-[8px] text-white">MC</div>
                 <div className="h-8 w-12 border-2 border-white/50 rounded flex items-center justify-center font-mono text-[8px] text-white">CRYPTO</div>
              </div>
              <p className="mt-6 text-[10px] text-center text-gray-600 font-mono uppercase tracking-wider">
                {content.pricing.secure_text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;