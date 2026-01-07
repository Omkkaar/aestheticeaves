import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { PORTFOLIO_ITEMS, SECONDARY_CTA_TEXT } from '../constants';
import Button from './Button';

interface PortfolioProps {
  onVideoInteraction: () => void;
  onCTAClick: () => void;
}

const ReelItem: React.FC<{
  index: number;
  reelSrc: string | null;
  onVideoInteraction: () => void;
}> = ({ index, reelSrc, onVideoInteraction }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
      onVideoInteraction();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      onVideoInteraction();
    }
  };

  return (
    <div className="group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
      <div className="aspect-[9/16] bg-black/40 rounded-sm overflow-hidden group relative shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500">
          {reelSrc ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-[1.01]"
              src={reelSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            {/* Individual Reel Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-secondary transition-colors"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                )}
              </button>
              <button 
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-secondary transition-colors"
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-all">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-secondary/40 text-3xl group-hover:border-secondary/50 group-hover:text-secondary group-hover:scale-110 transition-all duration-500">
                +
              </div>
            </div>
            <span className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-bold group-hover:text-secondary/60 transition-colors">
              Upload Narrative 0{index + 1}
            </span>
          </div>
        )}

        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/5 pointer-events-none group-hover:border-secondary/20 transition-colors" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/5 pointer-events-none group-hover:border-secondary/20 transition-colors" />

        <div className="absolute bottom-10 left-0 right-0 px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
           <div className="flex items-center gap-4">
             <span className="text-[10px] text-secondary font-bold tracking-[0.3em] uppercase whitespace-nowrap">Showcase 0{index + 1}</span>
             <div className="h-px w-full bg-secondary/30" />
           </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="font-serif text-white/40 text-sm italic">
          {reelSrc ? 'Walkthrough Active' : 'Slot Available for Client View'}
        </p>
        <div className="w-8 h-px bg-white/5 group-hover:w-16 group-hover:bg-secondary/40 transition-all duration-500" />
      </div>
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ onVideoInteraction, onCTAClick }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [customPortfolio, setCustomPortfolio] = useState<typeof PORTFOLIO_ITEMS>(PORTFOLIO_ITEMS);
  const [reels] = useState<(string | null)[]>([
    '/assets/reels/reel-01.mp4.mp4',
    '/assets/reels/reel-02.mp4.mp4',
    '/assets/reels/reel-03.mp4.mp4',
    '/assets/reels/reel-04.mp4.mp4',
    '/assets/reels/reel-05.mp4.mp4',
    '/assets/reels/reel-06.mp4.mp4',
  ]);

  const getGridClasses = (index: number) => {
    const layoutPatterns = [
      "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-2",
      "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-2", "md:col-span-1 md:row-span-1",
      "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1", "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-2", "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1"
    ];
    const mobileClasses = index % 3 === 0 ? "col-span-2" : "col-span-1";
    return `${mobileClasses} ${layoutPatterns[index] || "md:col-span-1 md:row-span-1"}`;
  };

  return (
    <SectionWrapper id="portfolio" className="bg-white px-4 md:px-0">
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <span className="font-sans text-secondary text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold opacity-80">Portfolio of Works</span>
        <h2 className="font-serif text-5xl md:text-7xl text-primary mb-8 tracking-tighter">Curated Design Narratives</h2>
        <div className="w-16 h-px bg-secondary/40 mx-auto mb-10"></div>
        <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed italic">
          Click on any frame to update the project visuals. From multi-story modern architecture to bespoke interior details.
        </p>
      </div>

      {/* Images and reels are served from the public assets folder; no user uploads allowed */}

      <div className="mb-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[160px] md:auto-rows-[250px]">
          {customPortfolio.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-neutral-50 transition-all duration-1000 cursor-pointer ${getGridClasses(idx)}`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" 
                loading="lazy" 
                onClick={() => setLightboxSrc(item.src)}
              />
              
              

              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-6 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 text-left opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <span className="text-secondary font-sans text-[8px] uppercase tracking-[0.4em] block mb-2 font-bold">Project Spec</span>
                <h4 className="text-white font-serif text-xl italic leading-tight">{item.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mb-32 bg-dark py-32 -mx-4 md:-mx-20 px-4 md:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-12">
            <div className="text-left">
              <span className="font-sans text-secondary text-[10px] uppercase tracking-[0.7em] mb-4 block font-bold">Cinematic Walkthroughs</span>
              <h3 className="font-serif text-5xl md:text-7xl text-white tracking-tighter italic leading-none">
                Dynamic <span className="text-secondary not-italic font-normal">Spaces</span>
              </h3>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-white/40 font-sans text-[9px] uppercase tracking-[0.5em] mb-2 font-bold">Exclusive Showcases</p>
              <div className="flex items-center gap-3 justify-end">
                <span className="h-px w-8 bg-secondary/50" />
                <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">06 Narrative Slots</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
             {reels.map((reelSrc, idx) => (
               <ReelItem 
                 key={idx} 
                 index={idx} 
                 reelSrc={reelSrc} 
                 onVideoInteraction={onVideoInteraction}
               />
             ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Button 
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white px-20 py-6 text-sm font-bold tracking-[0.4em] rounded-none shadow-sm hover:shadow-xl transition-all duration-700"
          onClick={onCTAClick}
        >
          {SECONDARY_CTA_TEXT}
        </Button>
      </div>

      {lightboxSrc && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 backdrop-blur-3xl" onClick={() => setLightboxSrc(null)}>
          <button className="absolute top-12 right-12 text-white/30 text-6xl font-extralight hover:text-white transition-colors">&times;</button>
          <img src={lightboxSrc} className="max-w-full max-h-full shadow-2xl object-contain border border-white/5 animate-fade-in-up" />
        </div>
      )}
    </SectionWrapper>
  );
};

export default Portfolio;