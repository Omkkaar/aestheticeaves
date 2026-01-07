import React from 'react';
import { BRAND_NAME, PRIVACY_POLICY_URL } from '../constants';

interface FooterProps {
  onOpenLegal?: (type: 'terms' | 'refund' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aestheticeavesinteriors/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100064878975612',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/aesthetic-eaves/?viewAsMember=true',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@AestheticEavesofficial',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-primary text-white py-16 border-t border-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl tracking-wide text-secondary mb-2">{BRAND_NAME}</h4>
            <p className="text-white/70 text-sm font-sans">Architects & Interior Designers</p>
            <p className="text-white/50 text-xs mt-4">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-300 font-sans tracking-wider">
            <button 
              onClick={() => window.open(PRIVACY_POLICY_URL, '_blank')}
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-secondary transition-colors"
            >
              Terms
            </button>
            <button 
              onClick={() => onOpenLegal?.('refund')}
              className="hover:text-secondary transition-colors"
            >
              Refund Policy
            </button>
          </div>

          <div className="flex gap-4">
            {socialPlatforms.map(platform => (
              <a 
                key={platform.name} 
                href={platform.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" 
                title={platform.name}
                aria-label={platform.name}
              >
                {platform.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;