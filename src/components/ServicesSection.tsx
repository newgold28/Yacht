import React from 'react';
import { Anchor, Waves, ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
  onOpenExplore: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
  onOpenExplore
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10 flex flex-col items-center">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-[1000px] mb-24 bg-white/95 backdrop-blur-lg rounded-[40px] p-10 sm:p-16 shadow-2xl border border-white/20">
        <span className="text-xs font-bold tracking-widest uppercase text-black/40 mb-8">About collective</span>
        
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-black leading-[1.1] font-heading tracking-tight">
          Nocturne Isle — is a maritime collective of master 
          <span className="inline-flex items-center justify-center px-4 py-1.5 mx-2 rounded-full bg-black/5 border border-black/10 text-xl sm:text-3xl lg:text-[40px] align-middle shadow-sm">
            <Anchor className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-black/70" /> mariners
          </span> 
          that delivers the power of secluded luxury with 
          <span className="inline-flex items-center justify-center px-4 py-1.5 mx-2 rounded-full bg-black/5 border border-black/10 text-xl sm:text-3xl lg:text-[40px] align-middle shadow-sm">
            <Waves className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-black/70" /> silent-keel
          </span> 
          vessels
        </h2>
        
        <p className="mt-10 text-sm sm:text-base text-black/60 max-w-lg font-medium leading-relaxed">
          The carbon hydrofoil breezes through midnight lagoons with 
          sustainable propulsion or glides through neon twilight
        </p>
      </div>

      {/* Staggered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        
        {/* Card 1 (Tall, High) */}
        <div className="rounded-[32px] bg-black/40 backdrop-blur-md border border-white/15 h-[480px] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl">
          <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-medium text-white/80">
            Vessels
          </div>
          <div className="z-10 mt-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 mb-4"></div>
            <h3 className="text-2xl font-bold text-white leading-tight font-heading mb-2">
              Carbon explorers that shape luxury
            </h3>
            <p className="text-[11px] text-white/50 mb-6 max-w-[200px] leading-relaxed">
              Exclusive charter of our 68m silent-keel superyachts. No rigid schedules, total freedom.
            </p>
            <button 
              onClick={onOpenExplore} 
              className="text-3xl sm:text-4xl font-medium text-white flex items-center gap-2 hover:text-white/70 transition-colors cursor-pointer font-heading tracking-tight"
            >
              <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} /> Visit fleet
            </button>
          </div>
          {/* Subtle gradient instead of raster image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />
        </div>

        {/* Card 2 (Medium, Pushed Down) */}
        <div className="rounded-[32px] bg-zinc-900/40 backdrop-blur-md border border-white/10 h-[400px] mt-0 lg:mt-24 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-white/80 backdrop-blur-md">
            Sanctuaries
          </div>
          <div className="z-10 mt-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 mb-4"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-heading mb-2">
              Driving absolute privacy through exclusive access
            </h3>
            <p className="text-[11px] text-white/50 leading-relaxed">
              Focused on remote atolls, untouched coral reefs, and absolute seclusion — not crowded ports.
            </p>
          </div>
          {/* Glow effect matching the red/orange from image but styled to our dark theme (maybe deep amber/copper) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl transform -rotate-12 pointer-events-none" />
        </div>

        {/* Card 3 (Tall, High) */}
        <div className="rounded-[32px] bg-zinc-800 border border-white/10 h-[460px] mt-0 lg:-mt-4 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-white/10 bg-black/20 text-[10px] font-medium text-white/80 backdrop-blur-md">
            Expeditions
          </div>
          <div className="z-10 mt-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 mb-4"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-heading mb-2">
              Autonomous processes with rapid discovery
            </h3>
            <p className="text-[11px] text-white/50 leading-relaxed">
              Descend 300m in submersibles fast, without losing luxury or compromising maritime safety.
            </p>
          </div>
          {/* Sleek metallic reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/80 pointer-events-none" />
        </div>

        {/* Card 4 (Medium, Pushed Down) */}
        <div className="rounded-[32px] bg-[#e4e4e7] border border-transparent h-[400px] mt-0 lg:mt-20 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[10px] font-medium text-black/70">
            Crew
          </div>
          <div className="z-10 mt-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-black mb-4"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight font-heading mb-2">
              A dedicated collective behind every voyage
            </h3>
            <p className="text-[11px] text-black/60 leading-relaxed max-w-[80%]">
              Our master mariners guide every step, from boarding to departure.
            </p>
          </div>
          {/* Floating Action Button */}
          <button 
            onClick={onOpenContact}
            className="absolute bottom-6 right-6 w-12 h-12 bg-white border border-black/10 shadow-lg text-black rounded-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

