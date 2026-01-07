import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import LegalModal from './components/LegalModal';
import ConsultationForm from './components/ConsultationForm';
import { TERMS_AND_CONDITIONS, REFUND_POLICY } from './constants';

function App() {
  const [legalType, setLegalType] = useState<'terms' | 'refund' | null>(null);
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  // Trigger Logic: Reappears on intent actions until successfully submitted
  const triggerConsultation = () => {
    if (!localStorage.getItem("ae_form_submitted")) {
      setIsConsultationFormOpen(true);
    }
  };

  useEffect(() => {
    // Exit intent logic - triggers every time until submission
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerConsultation();
      }
    };
    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, []);

  const handleCTAAction = (idToScroll?: string) => {
    // 1. Attempt to trigger form (will only show if not submitted)
    const isSubmitted = localStorage.getItem("ae_form_submitted");
    if (!isSubmitted) {
      triggerConsultation();
    }
    
    // 2. Perform original scroll action
    if (idToScroll) {
      document.getElementById(idToScroll)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLegalContent = () => {
    const policy = legalType === 'terms' ? TERMS_AND_CONDITIONS : REFUND_POLICY;
    if (!policy) return null;

    return (
      <div className="space-y-8">
        {policy.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="font-serif text-xl text-primary border-l-4 border-secondary pl-4">
              {section.heading}
            </h3>
            {Array.isArray(section.content) ? (
              <ul className="space-y-2 list-disc pl-5">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
        {policy.footer && (
          <p className="pt-8 border-t border-gray-100 italic text-sm text-gray-500">
            {policy.footer}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="font-sans antialiased selection:bg-secondary selection:text-black">
      <Header onCTAClick={() => handleCTAAction('process')} />
      <main>
        <Hero onCTAClick={() => handleCTAAction('process')} />
        
        <div id="services-trigger">
           <Services onCTAClick={() => handleCTAAction('process')} />
        </div>

        <Metrics onCTAClick={() => handleCTAAction('process')} />
        <Portfolio 
          onVideoInteraction={() => triggerConsultation()} 
          onCTAClick={() => handleCTAAction('process')} 
        />
        <Process onCTAClick={() => handleCTAAction('process')} />
        <WhyUs onCTAClick={() => handleCTAAction('process')} />
        <Founder onCTAClick={() => handleCTAAction('process')} />
        <FAQ onCTAClick={() => handleCTAAction('process')} />
        <Reviews />
        <Contact />
      </main>
      
      <Footer onOpenLegal={(type) => {
        if (type === 'privacy') return;
        setLegalType(type);
      }} />
      
      <FloatingWhatsapp />

      <ConsultationForm 
        isOpen={isConsultationFormOpen} 
        onClose={() => setIsConsultationFormOpen(false)}
        onLegalLinkClick={(type) => {
          if (type === 'privacy') {
            window.open('https://www.termsfeed.com/live/27b24541-04c7-4183-bde0-c26e1445a1e2', '_blank');
          } else {
            setLegalType(type);
          }
        }}
      />

      <LegalModal 
        isOpen={!!legalType} 
        onClose={() => setLegalType(null)} 
        title={legalType === 'terms' ? TERMS_AND_CONDITIONS.title : REFUND_POLICY.title}
      >
        {renderLegalContent()}
      </LegalModal>
    </div>
  );
}

export default App;