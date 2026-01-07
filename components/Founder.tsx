import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { 
  FOUNDER_NAME, 
  FOUNDER_TITLE, 
  FOUNDER_EXPERIENCE_YEARS,
  FOUNDER_DESC_1, 
  FOUNDER_DESC_2, 
  FOUNDER_QUOTE,
  FOUNDER_IMAGE_SRC,
  FOUNDER_IMAGE_FALLBACK,
  FOUNDER_EXPERTISE,
  PRIMARY_CTA_TEXT
} from '../constants';
import Button from './Button';

interface FounderProps {
  onCTAClick: () => void;
}

const Founder: React.FC<FounderProps> = ({ onCTAClick }) => {
  // Use static founder portrait from public assets
  const staticFounderImage = '/assets/team/omkar-kulkarni.jpg.png';

  return (
    <SectionWrapper id="founder" className="bg-primary relative overflow-hidden py-0 md:py-0">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <span className="font-serif text-[40vw] text-white leading-none translate-y-20 select-none">AE</span>
      </div>

      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[850px]">
          {/* Portrait Image Slot */}
          <div className="relative w-full lg:w-[45%] min-h-[500px] lg:min-h-full overflow-hidden group">
            <div className="absolute inset-0">
              <img 
                src={staticFounderImage} 
                alt={FOUNDER_NAME} 
                className="w-full h-full object-cover object-top brightness-[0.85] transition-transform duration-[2s] group-hover:scale-105"
                onError={(e) => e.currentTarget.src = FOUNDER_IMAGE_FALLBACK}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary" />
              
              <div className="absolute inset-0 bg-black/20 opacity-100 transition-opacity flex flex-col items-center justify-center pointer-events-none">
                <span className="text-white text-[9px] uppercase tracking-[0.6em] font-bold">Founder Portrait</span>
              </div>
            </div>

            <div className="absolute top-12 left-0 z-20 translate-x-12 pointer-events-none">
              <div className="bg-secondary text-primary px-5 py-8 flex flex-col items-center justify-center shadow-2xl">
                <span className="font-serif text-3xl font-bold leading-none">{FOUNDER_EXPERIENCE_YEARS.split(' ')[0]}</span>
                <span className="font-sans text-[8px] uppercase tracking-[0.3em] font-bold mt-1">Experience</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-primary lg:-ml-12">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-secondary/50" />
                <span className="font-sans text-secondary text-[10px] uppercase tracking-[0.4em] font-bold">The Visionary</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[0.9] tracking-tighter italic">
                Crafting <br/>
                <span className="text-secondary not-italic">Aesthetics</span>
              </h2>
              <p className="font-sans text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold border-l border-white/20 pl-6">
                {FOUNDER_TITLE}
              </p>
            </header>

            <div className="space-y-10 max-w-2xl">
              <div className="space-y-6">
                <p className="font-serif text-white text-xl leading-snug font-light italic opacity-90">{FOUNDER_DESC_1}</p>
                <p className="font-sans text-white/80 text-sm leading-relaxed">{FOUNDER_DESC_2}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-y border-white/10 py-10">
                {FOUNDER_EXPERTISE.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-sans text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">{item.title}</h4>
                    <p className="font-sans text-white/60 text-[11px] leading-relaxed uppercase">{item.desc}</p>
                  </div>
                ))}
              </div>

              <blockquote className="font-serif text-2xl text-white italic leading-[1.3] pt-4">{FOUNDER_QUOTE}</blockquote>

              <div className="pt-8">
                <Button className="bg-secondary text-primary border-secondary hover:bg-white hover:text-primary px-16 py-6 shadow-xl font-bold tracking-[0.2em]" onClick={onCTAClick}>
                  {PRIMARY_CTA_TEXT}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Founder;