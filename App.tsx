import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProofSection from './components/ProofSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <ProofSection />
          <Features />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;