import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Compass, Sparkles, Anchor, Waves } from 'lucide-react';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: () => void;
}

export const LearnMoreModal: React.FC<LearnMoreModalProps> = ({
  isOpen,
  onClose,
  onSelectContact
}) => {
  if (!isOpen) return null;

  const pillars = [
    {
      title: '100% Secluded Private Atolls',
      description: 'Zero public access, zero commercial air routes. Our private island sanctuaries are held under exclusive conservation leases reserved solely for your yacht arrival.'
    },
    {
      title: 'Silent Hybrid Marine Engineering',
      description: 'Glide into delicate shallow coral atolls on silent hydrogen-electric drives without disturbing marine wildlife or emitting fossil contaminants.'
    },
    {
      title: 'Michelin-Trained Atoll Culinary Brigade',
      description: 'Personalized multi-course beach banquets, freshly caught deep-sea seafood, and grand cru wine pairings curated to your party’s preferences.'
    },
    {
      title: 'Full Ocean Exploration Arsenal',
      description: 'Every charter arrives equipped with deep-sea submersibles, high-speed jet tenders, hydrofoil surfboards, Seabobs, and full nitrox diving facilities.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">Our Private Island Voyage Standard</h2>
              <p className="text-xs text-white/60">The convergence of transoceanic superyacht mastery and island seclusion</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              Unrivaled Freedom on the Water and On Land
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Nocturne Isle represents the pinnacle of private maritime expeditions. We unite cutting-edge 68m carbon explorer yachts with secluded, uninhabited private atolls across the South Pacific and Indian Ocean, delivering seamless, untethered luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
                      0{i + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">{p.title}</h4>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white font-heading">Ready to plan your uncharted expedition?</div>
              <div className="text-xs text-white/70 mt-0.5">Direct consultation with our maritime expedition directors.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectContact();
              }}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Reserve Charter Window</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
