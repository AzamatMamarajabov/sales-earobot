import React from 'react';
import { BarChart2, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-4">
               <div className="bg-gold-500/10 p-2 rounded-lg border border-gold-500/20 mr-3">
                <BarChart2 className="h-6 w-6 text-gold-500" />
              </div>
              <span className="font-bold text-2xl text-white">CZ MINNER <span className="text-gold-500">EA</span></span>
            </div>
            
            {/* Contact Info */}
            <a href={LINKS.PHONE_URL} className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <Phone className="h-4 w-4 mr-2 group-hover:text-gold-500 transition-colors" />
              <span className="font-medium tracking-wide">{LINKS.PHONE}</span>
            </a>
          </div>

          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{content.footer.links.terms}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{content.footer.links.privacy}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{content.footer.links.support}</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="max-w-4xl mx-auto text-center">
             <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
                <strong className="text-gray-500 block mb-2">{content.footer.disclaimer_title}</strong> 
                {content.footer.disclaimer_text_1}
              </p>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                {content.footer.disclaimer_text_2}
              </p>
          </div>
          <div className="mt-12 text-center text-sm text-gray-700 font-medium">
            &copy; {new Date().getFullYear()} {content.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;