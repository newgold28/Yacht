import React, { useState } from 'react';
import { Compass, Menu, X, ArrowUpRight, Anchor } from 'lucide-react';

interface NavigationProps {
  activeNav: string;
  onSelectNav: (nav: string) => void;
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeNav,
  onSelectNav,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'island', label: 'The Island' },
    { id: 'fleet', label: 'The Fleet' },
    { id: 'itinerary', label: 'Expeditions' },
    { id: 'team', label: 'Crew' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-5 flex items-center justify-between">
      {/* Brand: Nocturne Isle */}
      <button
        onClick={() => onSelectNav('home')}
        className="flex items-center gap-2 text-white group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg px-1 py-0.5"
      >
        <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center bg-black/90 backdrop-blur-sm group-hover:border-white transition-colors">
          <Anchor className="w-4 h-4 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white font-heading">
          Nocturne Isle
        </span>
      </button>

      {/* Desktop Navigation Links - Centered Pill */}
      <nav className="hidden md:flex items-center gap-6 px-8 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectNav(item.id)}
              className={`text-sm font-medium transition-all duration-200 cursor-pointer relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Primary Action: Book Voyage */}
      <div className="hidden md:flex items-center gap-4">
        <button
          className="whitespace-nowrap px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all duration-200 cursor-pointer backdrop-blur-md"
        >
          Log in
        </button>
        <button
          onClick={onOpenContact}
          className="whitespace-nowrap px-6 py-2 rounded-full bg-white text-black text-sm font-bold transition-all duration-200 cursor-pointer hover:bg-neutral-200"
        >
          Book Voyage
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={onOpenContact}
          className="px-3.5 py-1.5 rounded-full border border-white/50 text-white text-xs font-medium bg-black/40"
        >
          Book
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white rounded-lg border border-white/20 bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 bg-black/90 z-50 p-6 flex flex-col gap-6 md:hidden border-t border-white/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectNav(item.id);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-left text-lg font-medium text-white py-3 border-b border-white/10"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/50" />
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-center mt-auto"
          >
            Book Voyage
          </button>
        </div>
      )}
    </header>
  );
};
