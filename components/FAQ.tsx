import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { content } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-800/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{content.faq.heading}</h2>
        
        <div className="space-y-4">
          {content.faq.items.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;