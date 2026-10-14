import React from 'react';
import { Anchor, Compass, ArrowUp, Mail, Shield } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenExplore: () => void;
  onOpenMaterials: () => void;
  onOpenSpecialists: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenExplore,
  onOpenMaterials,
  onOpenSpecialists
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-[1440px] mx-auto pt-16 pb-12 px-4 sm:px-12 border border-white/10 mt-12 text-white bg-black/40 backdrop-blur-md rounded-t-[32px] sm:rounded-t-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center bg-black">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-heading">
              Nocturne Isle
            </span>
          </div>

          <p className="text-xs text-white/70 max-w-sm leading-relaxed">
            Ultra-luxury private superyacht charters to pristine, secluded island sanctuaries. Quiet carbon hydrofoils, Michelin-trained culinary brigades, and 100% private atoll isolation.
          </p>

          <div className="pt-2 text-xs text-white/50 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-white/70" />
            <span>Monaco • Papeete • Mahé • Male</span>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-xs uppercase font-bold text-white/50 tracking-wider">Expeditions</div>
          <ul className="space-y-2 text-xs text-white/70">
            <li>
              <button onClick={onOpenExplore} className="hover:text-white transition-colors cursor-pointer">
                Private Atolls
              </button>
            </li>
            <li>
              <button onClick={onOpenMaterials} className="hover:text-white transition-colors cursor-pointer">
                Superyacht Fleet
              </button>
            </li>
            <li>
              <button onClick={onOpenExplore} className="hover:text-white transition-colors cursor-pointer">
                Subsea Exploration
              </button>
            </li>
            <li>
              <button onClick={onOpenExplore} className="hover:text-white transition-colors cursor-pointer">
                Helipad Logistics
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="text-xs uppercase font-bold text-white/50 tracking-wider">Collective</div>
          <ul className="space-y-2 text-xs text-white/70">
            <li>
              <button onClick={onOpenSpecialists} className="hover:text-white transition-colors cursor-pointer">
                Master Mariners
              </button>
            </li>
            <li>
              <button onClick={onOpenSpecialists} className="hover:text-white transition-colors cursor-pointer">
                Michelin Chefs
              </button>
            </li>
            <li>
              <button onClick={onOpenSpecialists} className="hover:text-white transition-colors cursor-pointer">
                Marine Biologists
              </button>
            </li>
            <li>
              <button onClick={onOpenSpecialists} className="hover:text-white transition-colors cursor-pointer">
                Atoll Concierge
              </button>
            </li>
          </ul>
        </div>

        {/* Direct Booking Column */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs uppercase font-bold text-white/50 tracking-wider">Private Office</div>
          <p className="text-xs text-white/70">
            For confidential charter inquiries and atoll season bookings:
          </p>
          <button
            onClick={onOpenContact}
            className="w-full py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Inquire with Fleet Commander</span>
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>
          © {new Date().getFullYear()} Nocturne Isle Maritime & Island Expeditions. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
