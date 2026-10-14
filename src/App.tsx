/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroPanel } from './components/HeroPanel';
import { MaterialsModal } from './components/MaterialsModal';
import { SpecialistsModal } from './components/SpecialistsModal';
import { ExploreModal } from './components/ExploreModal';
import { ContactModal } from './components/ContactModal';
import { LearnMoreModal } from './components/LearnMoreModal';
import { HotspotDetailModal } from './components/HotspotDetailModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { ScrollAnimation } from './components/ScrollAnimation';
import { Hotspot, ModalType } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const handleSelectNav = (nav: string) => {
    setActiveNav(nav);
    if (nav === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(nav);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenHotspot = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setActiveModal('hotspot');
  };

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black flex flex-col items-center justify-start antialiased font-sans">
      <ScrollAnimation />
      
      {/* Top Header & Navigation */}
      <Navigation
        activeNav={activeNav}
        onSelectNav={handleSelectNav}
        onOpenContact={() => setActiveModal('contact')}
      />

      {/* Main Container */}
      <main className="w-full px-2 sm:px-4 lg:px-6 flex flex-col items-center">
        
        {/* Core Design Panel (Replicating exact layout in all-black & white typography) */}
        <HeroPanel
          onOpenExplore={() => setActiveModal('explore')}
          onOpenMaterials={() => setActiveModal('materials')}
          onOpenSpecialists={() => setActiveModal('specialists')}
          onOpenLearnMore={() => setActiveModal('learnMore')}
          onSelectHotspot={handleOpenHotspot}
        />

        {/* Detailed Sections (Accessible via Navigation and Exploration) */}
        <AboutSection
          onOpenContact={() => setActiveModal('contact')}
          onOpenMaterials={() => setActiveModal('materials')}
        />

        <ServicesSection
          onOpenContact={() => setActiveModal('contact')}
        />

        <TeamSection
          onOpenSpecialists={() => setActiveModal('specialists')}
          onOpenContact={() => setActiveModal('contact')}
        />
        <FeaturesSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectNav={handleSelectNav}
        onOpenContact={() => setActiveModal('contact')}
      />

      {/* Interactive Modals */}
      <MaterialsModal
        isOpen={activeModal === 'materials'}
        onClose={() => setActiveModal(null)}
        onSelectContact={() => setActiveModal('contact')}
      />

      <SpecialistsModal
        isOpen={activeModal === 'specialists'}
        onClose={() => setActiveModal(null)}
        onSelectContact={() => setActiveModal('contact')}
      />

      <ExploreModal
        isOpen={activeModal === 'explore'}
        onClose={() => setActiveModal(null)}
        onSelectContact={() => setActiveModal('contact')}
      />

      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={() => setActiveModal(null)}
      />

      <LearnMoreModal
        isOpen={activeModal === 'learnMore'}
        onClose={() => setActiveModal(null)}
        onSelectContact={() => setActiveModal('contact')}
      />

      <HotspotDetailModal
        hotspot={selectedHotspot}
        onClose={() => {
          setSelectedHotspot(null);
          setActiveModal(null);
        }}
        onSelectContact={() => {
          setSelectedHotspot(null);
          setActiveModal('contact');
        }}
      />

    </div>
  );
}
