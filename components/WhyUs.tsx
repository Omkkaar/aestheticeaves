import React from 'react';
import SectionWrapper from './SectionWrapper';
import { WHY_US_POINTS, SECONDARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface WhyUsProps {
  onCTAClick: () => void;
}

const WhyUs: React.FC<WhyUsProps> = ({ onCTAClick }) => {
  return (
    <SectionWrapper id="why-us" dark className="bg-primary text-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Why Clients Choose <br/>
            <span className="text-secondary italic">Aesthetic Eaves</span>
          </h2>
          <div className="font-sans text-gray-300 mb-8 space-y-6 leading-relaxed">
            <p>
              Aesthetic Eaves is an architecture and interior design practice based in Pune, 
              guided by thoughtful planning, spatial clarity, and material understanding. 
              The studio approaches each project as a considered process—shaped by site context, 
              lifestyle needs, and long-term usability.
            </p>
          </div>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-black font-bold tracking-widest px-10" onClick={onCTAClick}>
             {SECONDARY_CTA_TEXT}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHY_US_POINTS.map((point, idx) => (
            <div key={idx} className="flex items-start p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <span className="text-secondary text-lg mr-4 mt-1">✦</span>
              <p className="font-sans text-[13px] text-gray-100 uppercase tracking-wider leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
