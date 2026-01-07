import React from 'react';
import SectionWrapper from './SectionWrapper';
import { 
  BRAND_NAME, 
  CONTACT_PHONE, 
  CONTACT_EMAIL,
  CONTACT_ADDRESS_LINE1, 
  CONTACT_ADDRESS_LINE2, 
  MAP_URL 
} from '../constants';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" dark className="bg-dark relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-[40px] border-white/10 m-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="font-sans text-secondary text-xs uppercase tracking-[0.4em] mb-4 block">Get in Touch</span>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-12">Request Professional Design Guidance</h2>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Phone */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto text-secondary text-xl">
              ☏
            </div>
            <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">Call Us</p>
            <a 
              href={`tel:${CONTACT_PHONE}`} 
              className="block font-serif text-xl text-white hover:text-secondary transition-colors"
            >
              +91 {CONTACT_PHONE}
            </a>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto text-secondary text-xl">
              ✉
            </div>
            <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">Email Us</p>
            <a 
              href={`mailto:${CONTACT_EMAIL}`} 
              className="block font-serif text-xl text-white hover:text-secondary transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto text-secondary text-xl">
              ⚲
            </div>
            <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">Visit Us</p>
            <address className="not-italic font-serif text-lg text-white/80 leading-relaxed">
              {CONTACT_ADDRESS_LINE1}<br/>
              {CONTACT_ADDRESS_LINE2}
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-secondary text-primary hover:bg-white hover:text-primary border-none px-12 py-5 shadow-[0_10px_30px_rgba(197,160,89,0.3)] gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Open in Google Maps
            </Button>
          </a>
          <a href={`https://wa.me/91${CONTACT_PHONE}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:border-secondary hover:text-secondary px-12 py-5">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
