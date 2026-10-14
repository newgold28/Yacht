import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Calendar, Users, Waves, Anchor } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Polynesian Atoll Sanctuary',
    guests: '4 - 8 Guests',
    season: 'Autumn / Winter 2026',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">Bespoke Yacht & Island Charter Inquiry</h2>
              <p className="text-xs text-white/60">Connect with our expedition commander & private island concierge</p>
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

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Inquiry Received</h3>
              <p className="text-sm text-white/80 max-w-md leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our private maritime expedition director will contact you via <span className="text-white font-semibold">{formData.email}</span> within 2 hours to curate your itinerary and lock in atoll permissions.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                    Principal Guest Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Alexander Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                    Private Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vance@familyoffice.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                    Destination Atoll
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                  >
                    <option>Polynesian Atoll Sanctuary</option>
                    <option>Seychelles Outer Islands</option>
                    <option>Maldives Private Archipelago</option>
                    <option>Bespoke Transoceanic Route</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                  >
                    <option>Couples Voyage (2 Guests)</option>
                    <option>4 - 8 Guests (Family/Private)</option>
                    <option>10 - 14 Guests (Full Charter)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                    Charter Window
                  </label>
                  <select
                    value={formData.season}
                    onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors"
                  >
                    <option>Summer 2026</option>
                    <option>Autumn / Winter 2026</option>
                    <option>Spring 2027</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-white/70 mb-1.5">
                  Expedition Requirements (Helicopter, Dive Gear, Culinary Focus)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about specific yacht amenities, private chef dietary preferences, or secluded atoll activities..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-white/60 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-white" />
                  <span>Strict NDA & Confidentiality Guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Expedition Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
