import React from 'react';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { LINKS } from '../constants';

const Hero: React.FC = () => {
  const { content } = useLanguage();

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-rich-black min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-neon-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Trust Badge Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md hover:bg-white/10 transition-all cursor-default animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-500"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold text-neon-400 tracking-wide uppercase">{content.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-neon-600 drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            {content.hero.title_profit}
          </span> 
          <br className="hidden md:block" />
          <span className="text-white relative inline-block mt-2">
            {content.hero.title_risk}
            {/* Underline Decoration */}
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-gold-500 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 44.4082 1.00018 78.4735 1.00016C121.054 0.999981 198.001 6.99997 198.001 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed whitespace-pre-line animate-fade-in-up [animation-delay:400ms]">
          {content.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 animate-fade-in-up [animation-delay:600ms]">
          <Button onClick={scrollToPricing} variant="gold" className="w-full sm:w-auto text-lg px-10 py-4 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transform hover:scale-105">
            {content.hero.cta_buy}
          </Button>
          <a 
            href={LINKS.MYFXBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-base font-bold rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 group"
          >
            {content.hero.cta_proof}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-y-6 gap-x-12 animate-fade-in-up [animation-delay:800ms]">
          <div className="flex items-center group cursor-default">
            <div className="bg-brand-500/10 p-2 rounded-full mr-3 group-hover:bg-brand-500/20 transition-colors">
              <CheckCircle className="h-5 w-5 text-brand-500" />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{content.hero.trust_myfxbook}</span>
          </div>
          <div className="flex items-center group cursor-default">
            <div className="bg-gold-500/10 p-2 rounded-full mr-3 group-hover:bg-gold-500/20 transition-colors">
              <Shield className="h-5 w-5 text-gold-500" />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{content.hero.trust_mt5}</span>
          </div>
          <div className="flex items-center group cursor-default">
            <div className="bg-neon-500/10 p-2 rounded-full mr-3 group-hover:bg-neon-500/20 transition-colors">
              <CheckCircle className="h-5 w-5 text-neon-500" />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{content.hero.trust_withdraw}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;