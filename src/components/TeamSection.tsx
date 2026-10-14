import React from 'react';
import { Instagram, Facebook, Send, Anchor } from 'lucide-react';
import islandImg from '../Tropical_island_in_ocean_fog_202608211930.jpeg';

interface TeamSectionProps {
  onOpenSpecialists: () => void;
  onOpenContact: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  onOpenContact
}) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto min-h-[600px] sm:min-h-[750px] rounded-[32px] sm:rounded-[40px] overflow-hidden my-16 sm:my-24 border border-white/10 bg-black/40 backdrop-blur-md flex flex-col justify-between">
      
      {/* Background Vector Art / Gradient (Instead of Image) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-end overflow-hidden bg-transparent">
         {/* Subtle abstract topographic / radar pattern for luxury maritime feel */}
         <svg className="absolute w-[800px] h-[800px] text-white/5 opacity-40 translate-x-1/4 sm:translate-x-1/3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
           <circle cx="50" cy="50" r="45" />
           <circle cx="50" cy="50" r="35" />
           <circle cx="50" cy="50" r="25" />
           <circle cx="50" cy="50" r="15" />
           <path d="M50 0v100 M0 50h100" strokeDasharray="1 2" strokeWidth="0.4" />
           <path d="M15 15l70 70 M15 85l70-70" strokeDasharray="1 2" strokeWidth="0.4" />
         </svg>
         
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 p-6 sm:p-12 md:p-16 lg:p-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Form Card */}
        <div className="w-full lg:max-w-[500px] rounded-[24px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <h2 className="text-[28px] sm:text-[34px] font-light text-white mb-2 leading-[1.25] tracking-tight">
            Want to embark,<br />
            <span className="opacity-60 text-white/80">but still have questions?</span>
          </h2>
          
          <p className="text-[15px] text-white/80 mt-8 mb-8 font-medium">Leave a charter request</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors rounded-none"
            />
            <input 
              type="text" 
              placeholder="Phone number" 
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors rounded-none"
            />
            <input 
              type="text" 
              placeholder="Comment" 
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors rounded-none"
            />
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-semibold py-3.5 rounded-lg text-[15px] hover:bg-neutral-200 transition-colors mt-6 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:flex-1 flex justify-end">
          <img 
            src={islandImg} 
            alt="Tropical Island in Ocean Fog" 
            className="w-full max-w-[600px] h-auto object-cover rounded-[32px] shadow-2xl border border-white/10"
          />
        </div>

      </div>



    </section>
  );
};
