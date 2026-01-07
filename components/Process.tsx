import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROCESS_STEPS, PRIMARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface ProcessProps {
  onCTAClick: () => void;
}

const Process: React.FC<ProcessProps> = ({ onCTAClick }) => {
  return (
    <SectionWrapper id="process" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">How We Work</h2>
        <p className="font-sans text-gray-600 max-w-2xl mx-auto italic">
          A structured, transparent journey from concept to reality.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

        <div className="space-y-8 md:space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
              <div className={`md:w-1/2 p-6 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center w-full`}>
                <h3 className="font-serif text-2xl text-dark mb-2">{step}</h3>
                <span className="font-sans text-[10px] text-secondary tracking-[0.4em] uppercase font-bold">Step 0{idx + 1}</span>
              </div>
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-xs shrink-0 border-4 border-white shadow-lg">
                {idx + 1}
              </div>
              <div className="md:w-1/2 hidden md:block" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <Button onClick={onCTAClick} className="px-12 py-5 font-bold tracking-[0.2em]">
          {PRIMARY_CTA_TEXT}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Process;
