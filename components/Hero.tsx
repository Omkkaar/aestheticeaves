import React, { useState, useRef, useEffect } from 'react';
import { 
  HERO_BRAND_TITLE, 
  BRAND_SUBTITLE,
  HERO_CTA_TEXT 
} from '../constants';
import Button from './Button';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const [heroVideo, setHeroVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHeroVideo(url);
      setIsPlaying(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black flex flex-col overflow-hidden">
      {/* Background Layer: Single Horizontal Cinematic Video */}
      <div 
        className="absolute inset-0 z-0 group cursor-pointer"
        onClick={() => videoInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={videoInputRef} 
          onChange={handleVideoUpload} 
          accept="video/*" 
          className="hidden" 
        />
        
        {heroVideo ? (
          <video 
            ref={videoRef}
            src={heroVideo} 
            autoPlay 
            loop 
            muted={isMuted}
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-1000"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all border-b border-white/5">
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-secondary/40 text-2xl group-hover:border-secondary/50 group-hover:text-secondary group-hover:scale-110 transition-all duration-700">
               +
             </div>
             <span className="mt-4 text-white/20 text-[8px] uppercase tracking-[0.6em] font-bold">Upload Horizontal Brand Cinematic</span>
          </div>
        )}
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Video Controls Overlay */}
      {heroVideo && (
        <div className="absolute bottom-12 right-12 z-20 flex gap-4">
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            )}
          </button>
          <button 
            onClick={toggleMute}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            )}
          </button>
        </div>
      )}

      {/* Foreground Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            {HERO_BRAND_TITLE}
          </h1>
          
          <div className="w-20 h-px bg-secondary mx-auto mb-10 shadow-2xl"></div>
          
          <p className="font-sans text-white/90 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-24 font-medium max-w-2xl mx-auto leading-loose drop-shadow-lg">
            {BRAND_SUBTITLE}
          </p>
          
          <div className="pointer-events-auto">
            <Button 
              className="bg-secondary text-primary hover:bg-white hover:text-primary border-none px-16 py-6 text-[11px] tracking-[0.4em] font-sans font-bold shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 rounded-none group"
              onClick={onCTAClick}
            >
              <span className="relative z-10">{HERO_CTA_TEXT}</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 animate-pulse pointer-events-none z-10">
        <div className="w-px h-16 bg-gradient-to-b from-secondary/60 to-transparent shadow-xl" />
      </div>

      {/* Lateral Branding */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:block opacity-20 rotate-[-90deg] origin-left pointer-events-none">
        <span className="text-white text-[8px] uppercase tracking-[0.6em] font-bold">Architecture & Design Collective</span>
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block opacity-20 rotate-[90deg] origin-right pointer-events-none">
        <span className="text-white text-[8px] uppercase tracking-[0.6em] font-bold">Est. 2011 • Pune India</span>
      </div>
    </div>
  );
};

export default Hero;