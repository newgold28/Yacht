import React from 'react';
import { X, MapPin, Award, ArrowRight, Shield, Anchor } from 'lucide-react';
import { SPECIALISTS } from '../data/mockData';

interface SpecialistsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: () => void;
}

export const SpecialistsModal: React.FC<SpecialistsModalProps> = ({
  isOpen,
  onClose,
  onSelectContact
}) => {
  if (!isOpen) return null;

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
              <h2 className="text-xl font-bold text-white font-heading">The Voyage & Atoll Crew Collective</h2>
              <p className="text-xs text-white/60">Over 50 captains, master chefs, marine biologists & island concierges</p>
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

        {/* Specialists Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SPECIALISTS.map((spec) => (
              <div
                key={spec.id}
                className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/20 flex items-center justify-center text-sm font-bold text-white group-hover:border-white transition-colors">
                      {spec.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base font-heading">{spec.name}</h3>
                      <div className="text-xs text-white/80 font-medium">{spec.role}</div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-white/60">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-white/50" />
                          {spec.location}
                        </span>
                        <span>•</span>
                        <span>{spec.experience} exp</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed bg-black/90 p-3 rounded-xl border border-white/5 mb-4">
                    <span className="text-white/40 block text-[10px] uppercase font-bold mb-0.5">Core Discipline</span>
                    {spec.focus}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-white/70" />
                    Bespoke Charter Roster
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectContact();
                    }}
                    className="text-white font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Crew</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Collective Stat Banner */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base font-heading">Custom Crew Composition</h4>
              <p className="text-xs text-white/70 max-w-lg mt-1">
                Whether you require certified dive masters, sommeliers, private yoga instructors, or pediatric child minders on the atoll, we configure the team around your party.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectContact();
              }}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs whitespace-nowrap hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Configure Voyage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
