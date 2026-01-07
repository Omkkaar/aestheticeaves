import React, { useState, useEffect, useRef } from 'react';
import { BRAND_NAME, BRAND_SUBTITLE, LOGO_SRC, NAV_LINKS, PRIMARY_CTA_TEXT } from '../constants';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoPreview] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLightBackground = scrolled || mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLightBackground ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`group relative overflow-hidden transition-all duration-300 flex items-center justify-center rounded-full ${scrolled ? 'h-12 w-12' : 'h-16 w-16'}`}>
            <img src="/public/assets/logo.png" alt={`${BRAND_NAME} Logo`} className="w-full h-full object-contain p-1" />
          </div>

          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className={`font-serif font-bold transition-all duration-300 ${isLightBackground ? 'text-primary text-lg' : 'text-white text-xl'}`}>
              {BRAND_NAME}
            </h1>
            <p className="font-sans text-secondary uppercase tracking-[0.2em] text-[0.6rem]">{BRAND_SUBTITLE}</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.name} onClick={() => handleLinkClick(link.href)} className={`font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors ${isLightBackground ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}>
              {link.name}
            </button>
          ))}
          <button 
            onClick={onCTAClick}
            className={`px-6 py-2 border transition-all duration-300 font-sans text-xs uppercase tracking-widest ${isLightBackground ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-black bg-black/20 backdrop-blur-sm'}`}
          >
            {PRIMARY_CTA_TEXT}
          </button>
        </nav>

        <button className={`lg:hidden flex flex-col gap-1.5 p-2 ${isLightBackground ? 'text-primary' : 'text-white'}`} onClick={toggleMenu}>
          <div className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 top-[60px] bg-white transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {NAV_LINKS.map((link) => (
            <button key={link.name} onClick={() => handleLinkClick(link.href)} className="font-serif text-3xl text-primary hover:text-secondary">{link.name}</button>
          ))}
          <button onClick={onCTAClick} className="mt-4 px-12 py-4 bg-primary text-white font-sans text-sm uppercase tracking-widest">{PRIMARY_CTA_TEXT}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
