import React from 'react';
import { X, Sparkles, CheckCircle, ArrowRight, Anchor } from 'lucide-react';
import { Hotspot } from '../types';

interface HotspotDetailModalProps {
  hotspot: Hotspot | null;
  onClose: () => void;
  onSelectContact: () => void;
}

export const HotspotDetailModal: React.FC<HotspotDetailModalProps> = ({
  hotspot,
  onClose,
  onSelectContact
}) => {
  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs uppercase font-semibold text-white/50 tracking-wider">
              {hotspot.category}
            </span>
            <h3 className="text-xl font-bold text-white font-heading mt-0.5">
              {hotspot.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-white/80 leading-relaxed mb-5">
          {hotspot.description}
        </p>

        <div className="p-3.5 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between mb-6">
          <span className="text-xs text-white/60">Specification & Dimension:</span>
          <span className="text-xs font-bold text-white">{hotspot.metric}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectContact();
            }}
            className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Inquire for Charter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
