import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { AboutFounder } from './components/AboutFounder';
import { QuoteProcess } from './components/QuoteProcess';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { QuoteBuilder } from './components/QuoteBuilder';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('Routine House Cleaning');
  const [selectedZip, setSelectedZip] = useState('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const scrollToQuote = (serviceName?: string, zip?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (zip) setSelectedZip(zip);

    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    scrollToQuote(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#171C19] selection:bg-[#244638] selection:text-[#FAF8F5]">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuote={() => scrollToQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => scrollToQuote()} />

        {/* Verified Trust & Reputation Strip */}
        <TrustStats />

        {/* Services Showcase & Verified Inclusions */}
        <ServicesSection onSelectService={(service) => scrollToQuote(service)} />

        {/* How Quoting Works (3-Step Reassurance) */}
        <QuoteProcess onStartQuote={() => scrollToQuote()} />

        {/* Oklahoma City Metro Service Area & ZIP Checker */}
        <ServiceAreaChecker
          onSelectZip={(zip) => {
            setSelectedZip(zip);
            scrollToQuote(undefined, zip);
          }}
        />

        {/* Founder Story: Shade Jonas & Team Mission */}
        <AboutFounder />

        {/* The 2-Step Quote Request Experience */}
        <QuoteBuilder
          initialService={selectedService}
          initialZip={selectedZip}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => scrollToQuote()} />

      {/* Optional Quick Floating Action for Mobile Thumb Navigation */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={() => scrollToQuote()}
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] shadow-lg rounded-full active:scale-95 transition-transform"
        >
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
