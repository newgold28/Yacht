import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-8 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-white/5 to-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] text-white tracking-tight flex flex-col items-center">
          <span className="italic font-light opacity-90 font-serif">Proudly Trusted</span>
          <span className="font-medium font-heading">by Leading Brands</span>
          <span className="font-medium font-heading flex items-start">
            Across Industries
            <sup className="text-red-500 text-2xl sm:text-3xl ml-1 mt-2">®</sup>
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-sm sm:text-base text-white/70 max-w-[400px] leading-relaxed font-light">
          We've partnered with leading luxury and maritime brands to deliver innovative and impactful expedition solutions
        </p>

      </div>

      {/* Divider */}
      <div className="relative z-10 mt-20 mb-12 w-full h-px bg-white/10" />

      {/* Logos Container */}
      <div className="relative z-10 w-full flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale">
        
        {/* Logo 1: Abstract Buildings/Yacht */}
        <div className="flex items-center justify-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
          </svg>
          <span className="text-xs font-bold tracking-widest uppercase">Oceanic<br/>Group</span>
        </div>

        {/* Logo 2: Condon Style */}
        <div className="flex items-center justify-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="text-left flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Condon</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/70 leading-none mt-1">Maritime</span>
          </div>
        </div>

        {/* Logo 3: Morrison Style */}
        <div className="flex items-center justify-center gap-2">
          <div className="text-left flex flex-col">
            <span className="text-sm font-bold leading-none">Morrison</span>
            <span className="text-sm font-light leading-none mt-0.5">Navigation</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M21.5 2v6h-1.5V4.6l-6.5 6.4-4-4L2.5 14H1v-1.5l8.5-8.5 4 4L19.4 2z" />
          </svg>
        </div>

        {/* Logo 4: Abstract Geometric */}
        <div className="flex items-center justify-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 3L2 12h3v8h14v-8h3L12 3z" />
            <path d="M12 3v17" />
          </svg>
        </div>
        
        {/* Logo 5: Lines */}
        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-8 border border-white/50" />
          <div className="w-1 h-12 border border-white/50" />
          <div className="w-1 h-10 border border-white/50" />
        </div>

      </div>

    </section>
  );
};

