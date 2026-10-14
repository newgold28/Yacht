import React, { useState } from 'react';
import { X, Layers, Compass, Eye, ArrowRight, ShieldCheck, Sun, Waves, Sparkles, Navigation } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: () => void;
}

export const ExploreModal: React.FC<ExploreModalProps> = ({
  isOpen,
  onClose,
  onSelectContact
}) => {
  const [selectedSuite, setSelectedSuite] = useState<'master' | 'lounge' | 'island'>('master');

  if (!isOpen) return null;

  const suites = [
    {
      id: 'master',
      name: 'Ocean Master Penthouse',
      area: '220 m²',
      view: '270° Transoceanic Aft Horizon',
      features: ['Retractable glass stargazing roof', 'Private aft infinity dip pool', 'Dedicated butler & 24h stateroom bar']
    },
    {
      id: 'lounge',
      name: 'Sub-Sea Observation Salon',
      area: '95 m²',
      view: '360° Coral Reef & Pelagic Life',
      features: ['12m curved acoustic underwater glass', 'Acoustic underwater hydrophones', 'Bioluminescent night observation lighting']
    },
    {
      id: 'island',
      name: 'Private Atoll Overwater Villa',
      area: '340 m²',
      view: 'Lagoon & Virgin White Sands',
      features: ['Direct lagoon reef ladder & paddleboards', 'Zero-footprint solar microgrid', 'Private beach banquet dining terrace']
    }
  ];

  const currentSuite = suites.find(s => s.id === selectedSuite) || suites[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">Voyage & Sanctuary Exploration</h2>
              <p className="text-xs text-white/60">Inspect superyacht staterooms, subsea salons & secluded atoll villas</p>
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

        {/* Content Tabs */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Interactive Vessel & Island Schematics</h3>
                <p className="text-xs text-white/60">Select an environment to view architectural space configurations</p>
              </div>

              {/* Suite Selection Buttons */}
              <div className="flex items-center gap-2">
                {suites.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSuite(s.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      selectedSuite === s.id
                        ? 'bg-white text-black'
                        : 'bg-black border border-white/20 text-white/70 hover:text-white'
                    }`}
                  >
                    {s.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Blueprint Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black flex flex-col items-center justify-center p-6">
                  {/* SVG Perspective Wireframe for Stateroom / Island Villa */}
                  <svg className="w-full h-48 text-white/40" viewBox="0 0 400 220" fill="none" stroke="currentColor">
                    <rect x="40" y="30" width="320" height="160" rx="8" strokeWidth="1.5" />
                    <line x1="40" y1="30" x2="110" y2="70" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="360" y1="30" x2="290" y2="70" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="40" y1="190" x2="110" y2="150" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="360" y1="190" x2="290" y2="150" strokeWidth="1" strokeDasharray="3 3" />
                    <rect x="110" y="70" width="180" height="80" rx="4" strokeWidth="1.2" />
                    <line x1="200" y1="70" x2="200" y2="150" strokeWidth="1" />
                    {/* Yacht Lounge or Island Deck Layout */}
                    <rect x="140" y="110" width="120" height="30" rx="4" fill="#18181b" strokeWidth="1" />
                    <text x="160" y="130" fill="white" fontSize="9" fontFamily="sans-serif">{currentSuite.name}</text>
                  </svg>
                  <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-white flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span>Interactive Blueprint • {currentSuite.name}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <h4 className="text-sm font-bold text-white mb-1">{currentSuite.name} ({currentSuite.area})</h4>
                    <ul className="text-xs text-white/80 space-y-1">
                      {currentSuite.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specifications and Route Details */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                <div className="bg-black border border-white/10 rounded-2xl p-4 space-y-4">
                  <div className="text-xs uppercase font-bold text-white/50 tracking-wider">Suite Specifications</div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs py-1 border-b border-white/10">
                      <span className="text-white/60">Living Area</span>
                      <span className="text-white font-medium">{currentSuite.area}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-white/10">
                      <span className="text-white/60">Panoramic View</span>
                      <span className="text-white font-medium">{currentSuite.view}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-white/10">
                      <span className="text-white/60">Acoustic Shielding</span>
                      <span className="text-white font-medium">Silent Drive Certified</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-white/10">
                      <span className="text-white/60">Concierge Service</span>
                      <span className="text-white font-medium">24/7 Dedicated Butler</span>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950 rounded-xl border border-white/10 text-xs text-white/80">
                    <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5 text-white" />
                      Lagoon Access Guarantee
                    </div>
                    Each charter includes autonomous launch tenders for continuous transfers between vessel and island pavilion.
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectContact();
                  }}
                  className="w-full py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Custom Charter Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
