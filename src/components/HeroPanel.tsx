import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Hotspot } from '../types';

interface HeroPanelProps {
  onOpenExplore: () => void;
  onOpenMaterials: () => void;
  onOpenSpecialists: () => void;
  onOpenLearnMore: () => void;
  onSelectHotspot: (hotspot: Hotspot) => void;
}

export const HeroPanel: React.FC<HeroPanelProps> = ({
  onOpenExplore,
  onOpenMaterials,
  onOpenLearnMore
}) => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto min-h-[85vh] flex flex-col justify-end p-6 sm:p-10 lg:p-14 select-none">
      
      {/* BOTTOM CONTENT: Hero Text & Buttons */}
      <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-end gap-8 pb-4">
        
        {/* Left Side: YOUR VISION OF PRIVATE ISLAND LIVING */}
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.1] font-heading drop-shadow-2xl">
            YOUR VISION OF
            <br />
            PRIVATE ISLAND LIVING
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium drop-shadow-md max-w-lg">
            Ultra-luxury private yacht voyages and exclusive private island sanctuaries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenLearnMore}
              className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-xl cursor-pointer flex items-center gap-3"
            >
              <span>Book a Free Call</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </button>

            <button
              onClick={onOpenExplore}
              className="px-8 py-3.5 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              Explore Fleet
            </button>
          </div>
        </div>

        {/* Right Side: Floating Pill */}
        <div className="flex justify-end">
          <button
            onClick={onOpenMaterials}
            className="px-6 py-3 rounded-full border border-white/20 bg-black/40 hover:bg-black/90 text-white text-sm font-medium transition-all duration-200 backdrop-blur-md cursor-pointer whitespace-nowrap"
          >
            Sustainable Navigation
          </button>
        </div>

      </div>

    </div>
  );
};
