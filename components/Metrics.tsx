import React from 'react';
import SectionWrapper from './SectionWrapper';
import { METRICS, PRIMARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface MetricsProps {
  onCTAClick: () => void;
}

const Metrics: React.FC<MetricsProps> = ({ onCTAClick }) => {
  return (
    <SectionWrapper id="metrics" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl mb-4 text-primary tracking-tight">Numbers That Speak Quality Itself</h2>
        <div className="w-24 h-px bg-secondary mx-auto mb-6" />
        <p className="font-sans text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Interior Design Metrics</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {METRICS.map((metric, idx) => (
          <div key={idx} className="text-center p-8 border border-gray-100 hover:border-secondary transition-all duration-500 bg-white shadow-sm hover:shadow-xl group">
            <div className="font-serif text-4xl md:text-5xl text-secondary mb-3 group-hover:scale-110 transition-transform duration-500">{metric.value}</div>
            <div className="font-sans text-[10px] text-primary font-bold uppercase tracking-wider">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-12" onClick={onCTAClick}>
          {PRIMARY_CTA_TEXT}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Metrics;
