import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SERVICES, SECONDARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface ServicesProps {
  onCTAClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCTAClick }) => {
  return (
    <SectionWrapper id="services">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="group border-t border-gray-200 pt-8 hover:border-primary transition-colors duration-500">
            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-8">{service.title}</h3>
            <ul className="space-y-4 mb-8">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start font-sans text-gray-600">
                  <span className="text-secondary mr-3 text-lg">✦</span>
                  <span className="group-hover:text-dark transition-colors">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button onClick={onCTAClick}>
          {SECONDARY_CTA_TEXT}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Services;
