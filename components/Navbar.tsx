import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, Globe } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'uz' ? 'ru' : 'uz');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-rich-black/80 backdrop-blur-md border-white/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gold-500/10 p-2 rounded-xl border border-gold-500/20 mr-3 group-hover:bg-gold-500/20 transition-all duration-300">
              <BarChart2 className="h-6 w-6 text-gold-500" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight group-hover:text-gold-100 transition-colors">
              CZ MINNER <span className="text-gold-500">EA</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('proof')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-200">{content.nav.results}</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-200">{content.nav.features}</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-200">{content.nav.faq}</button>
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <button 
              onClick={toggleLanguage} 
              className="flex items-center text-gray-300 hover:text-white transition-all border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 active:scale-95"
            >
              <Globe className="w-4 h-4 mr-2 text-brand-500" />
              <span className="uppercase text-xs font-bold tracking-wider">{language}</span>
            </button>

            <Button onClick={() => scrollToSection('pricing')} variant="gold" className="py-2 px-6 text-sm shadow-gold-500/20 hover:shadow-gold-500/40">
              {content.nav.buy}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleLanguage} 
              className="flex items-center text-gray-300 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded-lg hover:bg-white/5"
            >
              <span className="uppercase text-xs font-bold">{language}</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-rich-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <button onClick={() => scrollToSection('proof')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">{content.nav.results}</button>
          <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">{content.nav.features}</button>
          <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">{content.nav.faq}</button>
          <div className="pt-4 px-2">
            <Button onClick={() => scrollToSection('pricing')} variant="gold" fullWidth>
              {content.nav.buy}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;