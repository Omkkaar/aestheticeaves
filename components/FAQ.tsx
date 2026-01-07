import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { FAQS, SECONDARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface FAQProps {
  onCTAClick: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onCTAClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-primary mb-4">Common Questions</h2>
        <p className="font-sans text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Everything you need to know before you book.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 hover:border-primary/30 transition-colors">
            <button 
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-white"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="font-serif text-lg text-dark pr-8">{faq.question}</span>
              <span className={`text-2xl text-secondary transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 text-gray-500 font-sans leading-relaxed border-t border-gray-100 pt-4 bg-gray-50 text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={onCTAClick} variant="outline" className="px-10 border-primary text-primary font-bold">
          {SECONDARY_CTA_TEXT}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
