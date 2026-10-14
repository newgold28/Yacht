import React, { useState } from 'react';
import { X, CheckCircle2, Anchor, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { VESSEL_FEATURES } from '../data/mockData';

interface MaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: () => void;
}

export const MaterialsModal: React.FC<MaterialsModalProps> = ({
  isOpen,
  onClose,
  onSelectContact
}) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(VESSEL_FEATURES[0].id);

  if (!isOpen) return null;

  const currentFeature = VESSEL_FEATURES.find(m => m.id === selectedFeatureId) || VESSEL_FEATURES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">Superyacht Fleet & Lagoon Technology</h2>
              <p className="text-xs text-white/60">Hydrofoil dynamics, zero-emission quiet drives & private atoll access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Feature Selector list */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">Vessel & Atoll Systems</span>
            {VESSEL_FEATURES.map((item) => {
              const isSelected = item.id === selectedFeatureId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFeatureId(item.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-950 border-white text-white shadow-lg'
                      : 'bg-zinc-950/60 border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">
                      {item.tag}
                    </span>
                    <span className="text-xs text-white/50">{item.range}</span>
                  </div>
                  <h3 className="font-semibold text-white mt-2 text-sm">{item.name}</h3>
                  <p className="text-xs text-white/60 mt-1 line-clamp-1">{item.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Feature Deep Dive */}
          <div className="md:col-span-7 bg-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs uppercase text-white/60 tracking-wider">{currentFeature.tag}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-heading">{currentFeature.name}</h3>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-right">
                  <div className="text-xs text-white/50">Capacity & Spec</div>
                  <div className="text-sm font-bold text-white">{currentFeature.specs}</div>
                </div>
              </div>

              {/* Technical Schematic Vector */}
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-black relative p-6 flex flex-col items-center justify-center">
                <svg className="w-full h-full text-white/40" viewBox="0 0 300 140" fill="none" stroke="currentColor">
                  <path d="M 30 70 Q 150 20 270 70 L 250 110 Q 150 120 50 110 Z" fill="#18181b" strokeWidth="1.5" />
                  <line x1="30" y1="70" x2="270" y2="70" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="90" y="45" width="40" height="25" rx="4" fill="#27272a" strokeWidth="1" />
                  <rect x="150" y="45" width="50" height="25" rx="4" fill="#27272a" strokeWidth="1" />
                  <ellipse cx="220" cy="55" rx="14" ry="7" fill="#09090b" strokeWidth="1" />
                  <text x="96" y="60" fill="white" fontSize="8" fontFamily="sans-serif">SALON</text>
                  <text x="156" y="60" fill="white" fontSize="8" fontFamily="sans-serif">BRIDGE</text>
                  <text x="214" y="58" fill="white" fontSize="8" fontFamily="sans-serif">HELI</text>
                </svg>
                <div className="absolute bottom-3 left-3 text-xs text-white/90 bg-black/90 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  Lloyds Register Certified Oceanic Class
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-5">
                {currentFeature.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs uppercase font-semibold tracking-wider text-white/60">Expedition Capabilities</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentFeature.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-black border border-white/10 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-white/60">
                Range Autonomy: <span className="text-white font-medium">{currentFeature.range}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectContact();
                }}
                className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Charter This Configuration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
